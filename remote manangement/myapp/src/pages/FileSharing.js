import React, { useState } from 'react';
import './FileSharing.css';

const FileSharing = () => {
  const [files, setFiles] = useState([]);
  const [fileToUpload, setFileToUpload] = useState(null);

  const handleFileChange = (e) => {
    setFileToUpload(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (fileToUpload) {
      const formData = new FormData();
      formData.append('file', fileToUpload);

      try {
        const response = await fetch('http://localhost:5000/upload', {
          method: 'POST',
          body: formData,
        });

        const data = await response.json();

        if (response.ok) {
          const newFile = {
            name: data.fileName,
            size: fileToUpload.size,
            uploader: 'John Doe', // Replace with actual user
            uploadDate: new Date().toLocaleDateString(),
            filePath: data.filePath,
          };
          setFiles([...files, newFile]);
          setFileToUpload(null);
        } else {
          alert('Failed to upload file');
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  const handleDelete = (fileName) => {
    setFiles(files.filter(file => file.name !== fileName));
  };

  return (
    <div className="file-sharing-container">
      <h2>File Sharing</h2>
      <p>This is the file sharing page. Here, users can upload and share files with others.</p>
      
      <div className="upload-section">
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={!fileToUpload}>
          Upload
        </button>
      </div>
      
      <div className="file-list-section">
        <h3>Uploaded Files</h3>
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Uploader</th>
              <th>Upload Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map(file => (
              <tr key={file.name}>
                <td>{file.name}</td>
                <td>{file.uploader}</td>
                <td>{file.uploadDate}</td>
                <td>
                  <a href={`http://localhost:5000${file.filePath}`} download>Download</a>
                  <button onClick={() => handleDelete(file.name)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FileSharing;

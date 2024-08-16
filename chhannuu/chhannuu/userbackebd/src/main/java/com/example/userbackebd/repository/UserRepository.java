package com.example.userbackebd.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.userbackebd.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}

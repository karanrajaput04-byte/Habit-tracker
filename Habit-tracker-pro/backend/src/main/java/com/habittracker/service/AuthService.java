package com.habittracker.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    @Autowired
    private PasswordEncoder passwordEncoder;

    public boolean verifyPassword(String plain, String hashed) {
        return passwordEncoder.matches(plain, hashed);
    }
}

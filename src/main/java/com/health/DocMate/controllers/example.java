package com.health.DocMate.controllers;

import com.health.DocMate.interfaces.UserRepository;
import com.health.DocMate.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class example {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/api/dadjokes")
    public String dadJokes() {
        return "Justice is a dish best served cold, if it were served warm it would be just water.";
    }

    @PostMapping("/add")
    public void testDb(@RequestBody User user) {
        user.setId(user.getUsername().concat(user.getPassword()));
        userRepository.save(user);
    }
}

package com.health.DocMate.controllers;

import com.health.DocMate.Repositories.InfectionRepository;
import com.health.DocMate.Repositories.UserRepository;
import com.health.DocMate.models.DB.MongoDBInfection;
import com.health.DocMate.models.DB.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class example {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private InfectionRepository infectionRepository;

    @PostMapping("/user/create")
    public void createUser(@RequestBody User user) {
        user.setId(user.getUsername().concat(user.getPassword()));
        userRepository.save(user);
    }

    @GetMapping("/infection")
    public Optional<MongoDBInfection> getInfection(@RequestParam String id) {
        return infectionRepository.findById(id);
    }
}

package com.health.DocMate.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class example {
    @GetMapping("/api/dadjokes")
    public String dadJokes() {
        return "Justice is a dish best served cold, if it were served warm it would be just water.";
    }
}

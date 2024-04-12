package com.practice.fullstackbackendlogin.user;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/login")
@RestController
public class UserController {

    @GetMapping
    public ResponseEntity<String> hello(){
        System.out.println("hello");
        return new ResponseEntity<>("hello", HttpStatus.OK);
    }
}

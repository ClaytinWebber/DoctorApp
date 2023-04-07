package com.example.DoctorApp;

import com.example.DoctorApp.objects.Injury;
import com.example.DoctorApp.objects.Patient;
import com.example.DoctorApp.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @Autowired
    private UserRepo userRepository;

@CrossOrigin
    @GetMapping(path = "/reasons")
    public @ResponseBody Iterable<Injury> getAllReasonsForVist() {
        return userRepository.findAll();
    }
}


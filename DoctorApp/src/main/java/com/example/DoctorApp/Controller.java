package com.example.DoctorApp;

import com.example.DoctorApp.objects.ReasonForVisit;
import com.example.DoctorApp.repos.UserRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {
    @Autowired
    private UserRepo userRepository;
    Logger logger = LoggerFactory.getLogger(Controller.class);

@CrossOrigin
    @GetMapping(path = "/reasons")
    public @ResponseBody Iterable<ReasonForVisit> getAllReasonsForVisit() {
   logger.info("Sending Reasons For Visit");
        return userRepository.findAll();
    }
}


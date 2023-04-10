package com.example.DoctorApp;

import com.example.DoctorApp.objects.Patient;
import com.example.DoctorApp.objects.ReasonForVisit;
import com.example.DoctorApp.repos.PatientRepo;
import com.example.DoctorApp.repos.ReasonForVistRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;

@RestController
public class Controller {
    @Autowired
    private ReasonForVistRepo userRepository;
    Logger logger = LoggerFactory.getLogger(Controller.class);
    @Autowired
    private PatientRepo PatientRepo;

    @CrossOrigin
    @GetMapping(path = "/reasons")
    public @ResponseBody
    Iterable<ReasonForVisit> getAllReasonsForVisit() {
        logger.info("Sending Reasons For Visit");
        return userRepository.findAll();
    }


    @PostMapping(path = "/patient")
    public void addNewUser(@RequestBody Patient request) throws SQLException{
        Patient u = new Patient();

        u.setFirstname(request.getFirstname());
        u.setLastname(request.getLastname());
        u.setBirthday(request.getBirthday());
        u.setEmail(request.getEmail());
        u.setId(request.getId());
        u.setPhone(request.getPhone());
        u.setSex(request.getSex());
        u.setReasonForVisit(request.getReasonForVisit());

        PatientRepo.save(u);

    }

    

}
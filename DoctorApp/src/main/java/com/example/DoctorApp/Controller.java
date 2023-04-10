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
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;
import java.util.Locale;
import java.util.Map;
import java.util.Optional;

@RestController
public class Controller {
    @Autowired
    private ReasonForVistRepo reasonForVisitRepo;
    Logger logger = LoggerFactory.getLogger(Controller.class);
    @Autowired
    private PatientRepo PatientRepo;

    @CrossOrigin
    @GetMapping(path = "/reasons")
    public @ResponseBody
    Iterable<ReasonForVisit> getAllReasonsForVisit() {
        logger.info("Sending Reasons For Visit");
        return reasonForVisitRepo.findAll();
    }

    @CrossOrigin

    @PostMapping(path = "/patient")
    public void addNewUser(@RequestBody Map<String,Object> request) throws SQLException{
        logger.info(request.toString());

        SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy", Locale.ENGLISH);


        String firstname = request.get("firstname").toString();
        String lastname = request.get("lastname").toString();
        String sex = request.get("sex").toString();
        String email = request.get("email").toString();
        String phone = request.get("phone").toString();
        Date birthday = null;
        try {
            birthday = formatter.parse(request.get("birthday").toString());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        Patient u = new Patient();

        u.setFirstname(firstname);
        u.setLastname(lastname);
        u.setBirthday(birthday);
        u.setEmail(email);
        u.setPhone(phone);
        u.setSex(sex);

        Optional<ReasonForVisit> a =reasonForVisitRepo.findById(request.get("reasonForVisit").toString());
        u.setReasonForVisit(a.get());
      //  System.out.println(u.toString());
      PatientRepo.save(u);

    }

    

}
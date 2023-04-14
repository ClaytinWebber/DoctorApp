package com.example.DoctorApp.repos;

import com.example.DoctorApp.objects.Patient;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface PatientRepo extends CrudRepository<Patient, Integer>{
    List<Patient> findByFirstnameAndLastname(String firstname,String lastname);
}

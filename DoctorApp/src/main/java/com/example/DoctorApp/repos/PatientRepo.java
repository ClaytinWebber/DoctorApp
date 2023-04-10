package com.example.DoctorApp.repos;

import com.example.DoctorApp.objects.Patient;
import org.springframework.data.repository.CrudRepository;

public interface PatientRepo extends CrudRepository<Patient, Integer>{
}

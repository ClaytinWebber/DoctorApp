package com.example.DoctorApp.repos;

import com.example.DoctorApp.objects.Doctor;
import org.springframework.data.repository.CrudRepository;

public interface DoctorRepo extends CrudRepository<Doctor, Integer> {
}

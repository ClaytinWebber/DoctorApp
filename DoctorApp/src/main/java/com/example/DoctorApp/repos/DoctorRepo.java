package com.example.DoctorApp.repos;

import com.example.DoctorApp.objects.Department;
import com.example.DoctorApp.objects.Doctor;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DoctorRepo extends CrudRepository<Doctor, Integer> {

    List<Doctor> findByDepartment(Department name);
}

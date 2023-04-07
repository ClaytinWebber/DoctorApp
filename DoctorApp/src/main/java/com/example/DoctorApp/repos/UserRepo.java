package com.example.DoctorApp.repos;

import com.example.DoctorApp.objects.Injury;
import com.example.DoctorApp.objects.Patient;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<Injury, String> {
}

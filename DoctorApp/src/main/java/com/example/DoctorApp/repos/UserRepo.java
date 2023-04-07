package com.example.DoctorApp.repos;

import com.example.DoctorApp.objects.ReasonForVisit;
import org.springframework.data.repository.CrudRepository;

public interface UserRepo extends CrudRepository<ReasonForVisit, String> {
}

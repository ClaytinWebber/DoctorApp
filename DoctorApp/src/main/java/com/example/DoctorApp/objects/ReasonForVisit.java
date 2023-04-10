package com.example.DoctorApp.objects;

import jakarta.persistence.*;

@Entity
@Table(name = "ReasonForVisit")
public class ReasonForVisit {
    @Id
    private String name;
    @ManyToOne()

    private Department department;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Department getDepartment() {
        return department;
    }

    public void setDepartment(Department department) {
        this.department = department;
    }

    @Override
    public String toString() {
        return "ReasonForVisit{" +
                "name='" + name + '\'' +
                ", department=" + department +
                '}';
    }
}

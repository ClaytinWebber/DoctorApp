package com.example.DoctorApp.objects;

public class CreatePatientRequest {
    private String firstname;
    private String lastname;
    private String sex;
    private String birthday;
    private ReasonForVisit reasonForVisit;

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getBirthday() {
        return birthday;
    }

    public void setBirthday(String birthday) {
        this.birthday = birthday;
    }

    public ReasonForVisit getReasonForVisit() {
        return reasonForVisit;
    }

    public void setReasonForVisit(ReasonForVisit reasonForVisit) {
        this.reasonForVisit = reasonForVisit;
    }
}

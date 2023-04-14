import { ReasonForVisit } from "./classes/ReasonForVist";
import { Department } from "./classes/Department";
import { Doctor } from "./classes/Doctor";
import { Patient } from "./classes/Patient";

const SERVER_ADRESS = "http://localhost:8080";

export const getReasonList = async () => {

    var reasonForVisitList = [];

    var response = await fetch(locate("reasons")).then(res => { return res.json(); }).then(reasons => {

        reasons.forEach(reason => {
            reasonForVisitList.push(new ReasonForVisit(reason.name, new Department(reason.department.name, reason.department.location)));
        });
    });

    return reasonForVisitList;
}


export const getAllPreviousVisitList = async (patient) => {
    var patientVisitList = [];
    const firstname = patient.firstname;
    const lastname = patient.lastname;

    await fetch(locate("patient"), {
        headers: {
            "auth": firstname + ":" + lastname
        }
    }).then((res) => {

        return res.json();
    }).then(patients => {
        console.log(patients);
        patients.forEach(
            p => {
                patientVisitList.push(new Patient(p.firstname, p.lastname, p.email, p.phone, p.sex, p.birthday, new ReasonForVisit(p.reasonForVisit.name, p.reasonForVisit.department)));
            }
        )
    });

    return patientVisitList;
}
/*

    var request = new XMLHttpRequest();

    request.open('POST', locate("user"));

    request.setRequestHeader('Content-Type', 'application/json');

    var body = {
        'username': username,
        'first_name': firstName,
        'last_name': lastName,
        'password': password

    };

    request.send(JSON.stringify(body));*/


export const sendPatient = async (patient) => {
    var data = JSON.stringify(patient);
    var response = await fetch(locate("patient"), {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data
    });


}


export const getAssignedDoctor = async (reason) => {
    let doctor;
    var response = await fetch(locate("doctor/Cold ")).then((res) => {
        return res.json();
    }).then((d) => {

        doctor = new Doctor(d.firstname, d.lastname, d.id, new Department(d.department.name, d.department.location));

    });
    console.log(doctor);

    return doctor
}

function locate(mapping) {

    return SERVER_ADRESS + "/" + mapping;
}
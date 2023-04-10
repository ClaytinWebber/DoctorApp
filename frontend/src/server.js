import { ReasonForVisit } from "./classes/ReasonForVist";
import { Department } from "./classes/Department";

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


function locate(mapping) {

    return SERVER_ADRESS + "/" + mapping;
}
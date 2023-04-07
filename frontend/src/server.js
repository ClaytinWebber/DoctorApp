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

function locate(mapping) {

    return SERVER_ADRESS + "/" + mapping;
}
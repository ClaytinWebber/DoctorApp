import { sendPatient } from './server';

var patientReport;

export function setPatientReport(aPatientReport) {
    sendPatient(aPatientReport)
    patientReport = aPatientReport;
}

export function getPatientReport() {
    return patientReport;
}
var doctor;

export function setADoctor(aDoctor) {
    doctor = aDoctor;
}
export function getDoctor() {
    return doctor;
}
export function serializeDate(date) {
    //2023-04-16

    const year = date.getFullYear();
    const month = date.getMonth() + 1 >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1);
    const day = date.getDate() >= 10 ? (date.getDate()) : '0' + (date.getDate());
    return year + '-' + month + '-' + day;
    // return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
}
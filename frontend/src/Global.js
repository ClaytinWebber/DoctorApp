import { sendPatient } from './server'l

var patientReport;

export function setPatientReport(aPatientReport) {
    sendPatient(aPatientReport)
    patientReport = aPatientReport;
}

export function getPatientReport() {
    return patientReport;
}
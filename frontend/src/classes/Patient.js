export class Patient {
    constructor(firstname, lastname, email, phone, sex, birthday, reasonForVisit) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.sex = sex;
        this.birthday = birthday;
        this.email = email;
        this.phone = phone;
        this.reasonForVisit = reasonForVisit;

    }


}

function getAssignedDoctor(injury) {
    return "Dr. " + "Jerry";
}
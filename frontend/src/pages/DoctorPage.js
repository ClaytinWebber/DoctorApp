import { useParams } from "react-router-dom";
import { getDoctor, getPatientReport } from "../Global";
import { Department } from "../classes/Department";
import doctorImg from "../img/doctor.png"
import "./DoctorPage.css"
export default function DoctorPage({ route }) {
    var doctor = getDoctor();

    console.log(doctor)

    return (<div className="doctorPage">

        <img src={doctorImg}></img>
        <div style={{ }}>
            {"Name: " + doctor.firstname + " " + doctor.lastname + " "}
            <br></br>
            <br></br>

            {"Department: " + doctor.department.name}
            <br></br>
            <br></br>

            {"Email: " + doctor.email}
            <br></br>
            <br></br>

            {"Phone number: " + doctor.phoneNumber}
        </div>

        <button>Back</button>
    </div>);
}

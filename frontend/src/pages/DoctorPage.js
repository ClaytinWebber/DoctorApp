import { useParams } from "react-router-dom";
import { getDoctor, getPatientReport } from "../Global";
import { Department } from "../classes/Department";

export default function DoctorPage({ route }) {
    var doctor = getDoctor();

    console.log(doctor)

    return (<div>
        {"Name:" + doctor.firstname +" "+ doctor.lastname + " " }
        <br></br>
        { "Department:" + doctor.department.name}
        <br></br>
        {}
        <br></br>
        {}
        </div>);
}

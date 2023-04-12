import { useParams } from "react-router-dom";
import { getDoctor } from "../Global";

export default function DoctorPage({ route }) {
    var doctor = getDoctor();

    console.log(doctor);

    return (<div></div>);
}
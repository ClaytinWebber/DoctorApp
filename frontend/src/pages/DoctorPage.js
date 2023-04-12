import { useParams } from "react-router-dom";
import { getDoctor } from "../Global";

export default function DoctorPage({ route }) {
    var doctor = getDoctor();

    return (console.log(doctor));
}

function printDoctor(doctor){
    document.write(doctor);
}

printDoctor();

import { getPatientReport } from "../Global";
import { getAssignedDoctor } from "../server";
import { useEffect, useState } from "react";
import { Doctor } from "../classes/Doctor";

export default function HomePage() {
    var patientReport = getPatientReport();

    const [doctor, setDoctor] = useState(new Doctor());

    useEffect(() => {

        getAssignedDoctor(patientReport).then((assignedDoctor) => {
            console.log(assignedDoctor);
            setDoctor(assignedDoctor);
        })

    }, [])

    return <div>

        <h1> Welcome {patientReport.firstname}
        </h1>
        <h3>You have been Assigned {doctor.firstname}</h3>
    </div>
}
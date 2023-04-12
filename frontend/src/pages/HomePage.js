import { getPatientReport,setADoctor } from "../Global";
import { getAssignedDoctor } from "../server";
import { useEffect, useState } from "react";
import { Doctor } from "../classes/Doctor";
import { Patient } from "../classes/Patient";
import { ReasonForVisit } from "../classes/ReasonForVist";
import "./HomePage.css";
import { Department } from "../classes/Department";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
    const navigate = useNavigate();
    //    var patientReport = getPatientReport();
    var patientReport = new Patient("Julien", "Goolsby", "juliengoolsby@gmail.com", "816-289-0122", "male", "04/16/2020", new ReasonForVisit("Cold ", "Test"));
    const [doctor, setDoctor] = useState(new Doctor("", "", "", new Department("", "")));

    useEffect(() => {

        getAssignedDoctor(patientReport).then((assignedDoctor) => {
            console.log(assignedDoctor);
            setDoctor(assignedDoctor);
        })

    }, [])

    return <div className="displaySection">

        <h1> Welcome {patientReport.firstname}
        </h1>
        <h3>You have been assigned Dr. {doctor.lastname}</h3>
        <h3>Please head to the {doctor.department.name} department, located {doctor.department.location}</h3>

        <button onClick={() => {
            setADoctor(doctor);
            navigate("/info/doctor",{});
        }} className="home-button">About Dr. {doctor.lastname}</button>
    </div>
}
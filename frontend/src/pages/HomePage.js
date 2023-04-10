import {getPatientReport} from "../Global";
import { getAssignedDoctor } from "../server";

export default function HomePage() {
    var patientReport = getPatientReport();

    console.log(getAssignedDoctor())


    return <div>

        <h1> Welcome {patientReport.firstname}
        </h1>
        <h3>You have been Assigned </h3>
    </div>
}
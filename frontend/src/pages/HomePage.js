import {getPatientReport} from "../Global";


export default function HomePage() {
    var patientReport = getPatientReport();
    return <div>

        <h1> Welcome {patientReport.firstname}
        </h1>
        <h3>You have been Assigned </h3>
    </div>
}
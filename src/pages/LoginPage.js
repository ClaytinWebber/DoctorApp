import "./LoginPage.css"
import { useNavigate } from 'react-router-dom';
import { setPatientReport } from "../Global"
import { PatientReport } from "../classes/PatientReport";
export default function LoginPage() {
    const navigate = useNavigate();


    function handleSubmit(event) {
        event.preventDefault();
        setPatientReport(new PatientReport(event.target.name.value, event.target.name.value, event.target.sex.value, event.target.birtday.value, event.target.reason.value));
        navigate("/info")
    }
    return <div className="">

        <div className="login-form">
            <h1> New Patient Report</h1>
            <form style={{ margin: 'auto' }} onSubmit={handleSubmit}>
                <div className="login-form-input">
                    <label>Name: </label>
                    <input id="name"></input>
                </div>
                <div className="login-form-input">

                    <label>Birthday: </label>
                    <input id="birthday"></input>
                </div>
                <div className="login-form-input">
                    <label>Sex: </label>
                    <select id="sex" style={{ color: "white" }}>
                        <option value ="Male"className="option">Male</option>
                        <option value = "Female"className="option">Female</option>


                    </select>

                </div>
                <div className="login-form-input">
                    <label>Reason For Vist: </label>
                    <select id="reason">
                        <option  value={"Broken Leg"}className="option">Broken Leg</option>
                        <option value = {"Cold"}className="option">Cold</option>
                        <option value = {"Heart Attack"}className="option">Heart Attack</option>

                    </select>

                </div>
                <input style={{ width: '100%' }} type={"submit"} />
            </form>
        </div>
    </div>
}
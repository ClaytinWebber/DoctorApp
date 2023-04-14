import "./LoginPage.css"
import { useNavigate } from 'react-router-dom';
import { setPatientReport } from "../Global"
import { Patient } from "../classes/Patient";
import * as Server from "../server";
import { serializeDate } from "../Global";
import { ReasonForVisit } from "../classes/ReasonForVist";
import { Department } from "../classes/Department";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export default function LoginPage() {

    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();
    // var reasonForVisitList = [];
    const [reasonForVisitList, setReasonForVisitList] = useState([]);
    var reasonOptions;
    useEffect(() => {
        Server.getReasonList().then((reasonList) => {
            setReasonForVisitList(reasonList);
            // reasonForVisitList = reasonList;
        })

    }, [])

    //  const reasonForVisitList = [new ReasonForVisit("Test", new Department("test,test")), new ReasonForVisit("Test", new Department("test,test"))];


    var reasonOptions = reasonForVisitList.map((reason) => {
        return (
            <option key={reason.name} value={reason.name} className="option">{reason.name}</option>
        )
    });

    function handleSubmit(event) {
        event.preventDefault();
        setPatientReport(new Patient(event.target.firstname.value, event.target.lastname.value, event.target.email.value, event.target.phone.value, event.target.sex.value, serializeDate(date), event.target.reason.value));
        navigate("/info")
    }
    return <div className="">

        <div className="login-form">
            <h1> New Patient Report</h1>
            <form style={{ margin: 'auto' }} onSubmit={handleSubmit}>
                <div className="login-form-input">
                    <label>First name: </label>
                    <input style={{ width: '5rem' }} id="firstname"></input>
                    <label>Last name: </label>
                    <input style={{ width: '5rem' }} id="lastname"></input>
                </div>

                <div className="login-form-input">

                    <label>Email: </label>
                    <input id="email"></input>
                </div>      <div className="login-form-input">

                    <label>Phone: </label>
                    <input type={
                        "tel"
                    } id="phone"></input>
                </div>
                <div className="login-form-input">

                    <label>Birthday: </label>
                    <DatePicker selected={date}
                        onChange={(date) => setDate(date)} />                </div>
                <div className="login-form-input">
                    <label>Sex: </label>
                    <select id="sex" style={{ color: "white" }}>
                        <option value="Male" className="option">Male</option>
                        <option value="Female" className="option">Female</option>


                    </select>

                </div>
                <div className="login-form-input">
                    <label>Reason For Vist: </label>
                    <select id="reason">
                        {reasonOptions}

                    </select>

                </div>
                <input style={{ width: '100%' }} type={"submit"} />
            </form>
        </div>
    </div>
}
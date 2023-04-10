import "./LoginPage.css"
import { useNavigate } from 'react-router-dom';
import { setPatientReport } from "../Global"
import { Patient } from "../classes/Patient";
import * as Server from "../server";
import { ReasonForVisit } from "../classes/ReasonForVist";
import { Department } from "../classes/Department";
import { useEffect, useState } from "react";
export default function LoginPage() {
    const navigate = useNavigate();
    // var reasonForVisitList = [];
    const [reasonForVisitList, setReasonForVisitList] = useState([]);
    var reasonOptions;
    useEffect(() => {
        Server.getReasonList().then((reasonList) => {
            setReasonForVisitList(reasonList);
            // reasonForVisitList = reasonList;
        })

    },[])

    //  const reasonForVisitList = [new ReasonForVisit("Test", new Department("test,test")), new ReasonForVisit("Test", new Department("test,test"))];


    var reasonOptions = reasonForVisitList.map((reason) => {
        return (
            <option key={reason.name}value={reason.name} className="option">{reason.name}</option>
        )
    });

    function handleSubmit(event) {
        event.preventDefault();
        setPatientReport(new Patient(event.target.name.value, event.target.name.value, event.target.sex.value, event.target.birthday.value, event.target.reason.value));
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
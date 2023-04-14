import { getPatientReport } from "../Global";
import { getAllPreviousVisitList } from "../server";

import { useEffect, useState } from "react";
import "./VisitsPage.css"
export function VisitsPage() {
    const [visitList, setVistList] = useState([]);
    var visitElement;
    useEffect(() => {
        getAllPreviousVisitList(getPatientReport()).then((list) => {
            setVistList(list);
            // reasonForVisitList = reasonList;
        })

    }, [])
    var visitElement = visitList.map((patient) => {
        return (


            <div className="visitItem" key={(Math.random() + 1).toString(36).substring(7)} value={patient.firstname} >{patient.reasonForVisit.name}</div>
        )
    });

    return (<div>
        <table className="visitTable">
            {visitElement}</table></div>);
}
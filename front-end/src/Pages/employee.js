import React from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../Components/EmployeeTable";

function Employee() {
    const TableColumns = [
        { id: "id", label: "ID", minWidth: 90 },
        { id: "firstname", label: "First Name", minWidth: 100 },
        { id: "lastname", label: "Last Name", minWidth: 100 },
        { id: "birthdate", label: "Date of Birth", minWidth: 120 },
        { id: "startdate", label: "Start Date", minWidth: 100 },
        { id: "department", label: "Department", minWidth: 120 },
        { id: "street", label: "Street", minWidth: 150 },
        { id: "city", label: "City", minWidth: 90 },
        { id: "state", label: "State", minWidth: 30 },
        { id: "zipcode", label: "Zip Code", minWidth: 90 },
    ]

    const createData = (
        id,
        firstname,
        lastname,
        birthdate,
        startdate,
        department,
        street,
        city,
        state,
        zipcode
    ) => {
        return {
            id,
            firstname,
            lastname,
            birthdate,
            startdate,
            department,
            street,
            city,
            state,
            zipcode,
        }
    }

    return (
        <>
            <h1>HRnet</h1>
            <EmployeeTable TableColumns={TableColumns} createData={createData}/>
            <Link className="btn employee" to="/">Home</Link>
        </>
    );
}

export default Employee;
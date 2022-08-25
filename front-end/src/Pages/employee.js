import React from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../Components/EmployeeTable";

function Employee() {

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
            <EmployeeTable createData={createData}/>
            <Link className="btn employee" to="/">Home</Link>
        </>
    );
}

export default Employee;
import React from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../Components/EmployeeTable";

function Employee() {
    return (
        <>
            <h1>HRnet</h1>
            <EmployeeTable />
            <Link className="btn employee" to="/">Home</Link>
        </>
    );
}

export default Employee;
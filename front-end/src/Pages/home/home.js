import React from "react";
import { Link } from "react-router-dom";
import EmployeeForm from "../../components/EmployeeForm/EmployeeForm";

function Home() {
    return (
        <>
            <h1>HRnet</h1>
            <Link className="btn employee" to="/employee-list">
                View Current Employees
            </Link>
            <EmployeeForm />
        </>
    );
}

export default Home;
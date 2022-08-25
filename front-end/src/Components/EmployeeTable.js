import { React, useState } from "react";
import { useSelector } from "react-redux";
import TableColumn from "./TableColumn";
import TableData from "./TableData";
import TablePagination from "./TablePagination";

function EmployeeTable(props) {
    const allEmployees = useSelector((state) => state.employees);
    const createData = props.createData;

    
    const [entry, setEntry] = useState('')
    
    const TableColumns = [
        { id: "firstname", label: "First Name"},
        { id: "lastname", label: "Last Name"},
        { id: "startdate", label: "Start Date"},
        { id: "department", label: "Department"},
        { id: "birthdate", label: "Date of Birth"},
        { id: "street", label: "Street"},
        { id: "city", label: "City"},
        { id: "state", label: "State"},
        { id: "zipcode", label: "Zip Code"},
    ]

    const rows = allEmployees.map((user) =>
        createData(
            user.id,
            user.firstName,
            user.lastName,
            user.birthDate,
            user.startDate,
            user.department,
            user.street,
            user.city,
            user.usState,
            user.zipCode
        )
    );

    return (
        <div id="employee-table_wrapper" className="dataTables_wrapper no-footer">
                <div className="dataTables_length" id="employee-table_length">
                    <label>Show
                        <select id="entry" name="employee-table_length" className="" onClick={(e) => setEntry(e.target.value)}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select> 
                        entries</label>
                </div>
                <div id="employee-table_filter" className="dataTables_filter">
                    <label>Search:
                        <input type="search" className="" placeholder=""></input>
                    </label>
                    </div>
                    <table id="employee-table" className="display dataTable no-footer">
                        <thead>
                            <tr>
                                <TableColumn data={TableColumns} />
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="odd">
                                <td id="tableResult" valign="top" colSpan="9" className="dataTables_empty">
                                    <TableData rowsdata={rows} columndata={TableColumns} entry={entry}/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="dataTables_info" id="employee-table_info">Showing {allEmployees.length} of {allEmployees.length} entries</div>
                    <div className="dataTables_paginate paging_simple_numbers" id="employee-table_paginate"> 
                        <a className="paginate_button previous" tabIndex="-1" id="employee-table_previous">Previous</a>
                        <span></span>
                        <a className="paginate_button next" tabIndex="-1" id="employee-table_next">Next</a>
                    </div>
                </div>
    );
};

export default EmployeeTable;
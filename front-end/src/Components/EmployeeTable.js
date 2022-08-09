import React from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function EmployeeTable(props) {
    const allEmployees = useSelector((state) => state.employees);
    const TableColumns = props.TableColumns;
    const createData = props.createData;

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
        <Paper
            sx={{ width: "100%", overflow: "hidden", margin: "2.5em" }}
            align="center"
        >
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table size="small" stickyHeader>
                    <TableHead>
                        <TableRow>
                            {TableColumns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, i) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                    {TableColumns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell
                                                key={`${column.id}-${i}`}
                                                align={column.align}
                                            >
                                                {column.format && typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
};

export default EmployeeTable;
function TableData(props) {
    const rows = props.rowsdata;
    const TableColumns = props.columndata;

    var entrySelect = document.getElementById("entry");
    var entryNumber = entrySelect.options[entrySelect.selectedIndex].value;
    //console.log(entryNumber);

    return (
        <>
            {rows.map((row, i) => {
                return (
                    <tr hover tabIndex={-1} key={i}>
                        {TableColumns.map((column) => {
                            const value = row[column.id];
                            return (
                                <td key={column.id} id={column.id}>
                                    {column.format && typeof value === "number" ? column.format(value) : value}
                                </td>
                            )
                        })}
                    </tr>
                );
            })}
        </>
    )
}

export default TableData;
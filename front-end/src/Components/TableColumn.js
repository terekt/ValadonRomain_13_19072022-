function TableColumn(props) {
    const TableColumns = props.data;

    return (
        <>
            {TableColumns.map((column) => (
                <th id={column.id} className="sorting" tabIndex="0" rowSpan="1" colSpan="1" key={column.id}>{column.label}</th>
            ))}
        </>
    )
}

export default TableColumn;
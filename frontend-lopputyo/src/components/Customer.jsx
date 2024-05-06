import React, { useEffect, useState } from 'react';
import {AgGridReact} from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function Customer() {
    const [customers, setCustomers] = useState([]);

    useEffect(() => { getCustomers(); }, []);
    
    const getCustomers = () => {
        fetch('https://customerrestservice-personaltraining.rahtiapp.fi/api/customers')
            .then(response => response.json())
            .then(data => {setCustomers(data._embedded.customers)})
            .catch(error => console.log(error));
    }
    const [columnDefs] = useState([
        {field: 'firstname', sortable: true, filter: true},
        {field: 'lastname', sortable: true, filter: true},
        {field: 'streetaddress', sortable: true, filter: true},
        {field: 'postcode', sortable: true, filter: true},
        {field: 'city', sortable: true, filter: true},
        {field: 'email', sortable: true, filter: true},
        {field: 'phone', sortable: true, filter: true},
    ]);

    return (
        <>
        <div className="ag-theme-material" style={{width: 1280, height: 1000}}>
            <AgGridReact
                rowData={customers}
                columnDefs={columnDefs}
                pagination={true}
                paginationPageSize={10}
            />
        </div>
    </>
    );
}
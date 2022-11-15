import React, { useEffect, useState } from "react";
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { Button } from "@mui/material";
const columns = [
    { field: 'firstName', headerName: 'First name', width: 200 },
    { field: 'lastName', headerName: 'Last name', width: 200 },
    { field: 'email', headerName: 'email', width: 200 },
    {
        field: 'password',
        headerName: 'password',
        width: 200,
    },
];
export default function DataTable() {

    const [studentData, setStudentData] = useState([]);
        const [deleteId, setDeleteId] = useState();
    const fetchStudentsData = () => {
        axios.get("http://localhost:5000/api/getStudents")
            .then((res) => setStudentData(res.data))
    }
    useEffect(() => {
        fetchStudentsData();
    }, []);

    const deleteData = () =>{

     axios.delete(`http://localhost:5000/api/delete/${deleteId}`).then((res)=>setStudentData(res.data))
    }
    return (

        <>
            {/* <div > */}
            <Paper elevation={10} className="paperStyle">
                <h1>Student Data</h1>
                <DataGrid
                    rows={studentData}
                    getRowId={(row) => row._id}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    onSelectionModelChange={itm =>setDeleteId(itm)}
                />
                <Button variant="contained" color="success" onClick={deleteData} >Delete</Button>
            </Paper>
            {/* </div> */}
        </>
    );
}

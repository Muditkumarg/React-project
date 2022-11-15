import React, { useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Card, CardContent, TextField } from "@mui/material";
import { useNavigate } from "react-router";
import axios from "axios"
import swal from "sweetalert";
// import Swal from "sweetalert2";
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
export default function Login() {
    const initialState = {firstName:'', lastName:'', email:'', Password:''}
    const [data, setData] = useState(initialState);
    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setData({...data , [name] : value})
    }
    const [open, setOpen] = React.useState(false);
    const postStudentData = () =>{
        axios.post("http://localhost:5000/api/studentsData",data)
        .then((res)=>{
            const {success,message,result}=res.data
            if(success){
                swal({
                    text: message,
                    icon: "success",
                  }).then(()=>{
                    setData(result)
                    navigate('/tableB')
                })
            }
        })
    }
    const handleOpen = () => {
        setOpen(true);}
    
    const handleSubmit = () => {
        setOpen(false);
        postStudentData();
    }
    const navigate = useNavigate();
    const close = () =>{
        navigate("/")
    }
    return (
        <>
        <div className="log-btn" >

        <Button variant="contained" color="success"  className="log-btn" onClick={close} >LogOut</Button>

        </div>

        <div className="btn">

            <Button variant="contained" color="success" onClick={handleOpen}>Add New Record</Button>
           

            <Modal
                open={open}
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                       
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    </Typography>
                    <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5">Please Fill the detail</Typography>
                            <form>
                                <Grid container spacing={1} >
                                    <Grid xs={12} sm={6} item>
                                        <TextField label="First name" name="firstName" onChange={handleInputChange} placeholder="Enter first name" fullWidth  ></TextField>
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField label="Last name" name = "lastName" onChange={handleInputChange} placeholder="Enter lirst name" fullWidth></TextField>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField type="email" label="Email" name="email" onChange={handleInputChange} placeholder="Enter email id" fullWidth></TextField>
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField  label="password" name="password" onChange={handleInputChange} placeholder="Enter your password" fullWidth></TextField>
                                    </Grid>
                                </Grid>

                                <div className="btn-2" >
                                    <Button variant="contained" color="success" fullWidth onClick={handleSubmit}>submit</Button>
                                </div>
                            </form>
                        </CardContent>

                    </Card>

                </Box>
            </Modal>
        </div>
        </>
    );
}


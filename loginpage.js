import { React, useState } from "react";
import Grid from '@mui/material/Grid';
import { Avatar, Button, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import swal from "sweetalert";
export default function LoginPage() {
    const navigate = useNavigate();
    const initialState = { email: "", password: "" };
    const [data, setData] = useState(initialState);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })}
    const login = () => {
        axios.post('http://localhost:5000/api/login', data).then((res) => {
            const { message, success, result } = res.data;
            if (success) {
                swal({
                    text: message,
                    icon: "success"
                }).then(() => {
                    setData(result);
                    navigate("/tableB")
                })
            }
            else{
                swal({
                    text: message,
                    icon: "error"
                })
            }       
        })
    }
    const [error, setError] = useState({});
    const Error_validation = (value) => {
        let error = {};
        const regexForEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!value.email || !regexForEmail.test(value.email)) {
            error.email = "Please Enter Valid Email";
        }
        if (!value.password) {
            error.password = "Please Enter Password";
        }
        return setError(error)
    }
    const OnSubmitClick = (e) => {
        Error_validation(data);
        login();

    }

    const paperStyle = { padding: 20, height: '50vh', width: "40vh", margin: "20px auto" }
    const avtarStyle = { backgroundColor: '#1bbd7e' }

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align="center" >
                    <Avatar style={avtarStyle} ><LockIcon></LockIcon></Avatar>
                    <h1>Login</h1>
                </Grid>
                <TextField label="Email id" name='email' onChange={handleInputChange} placeholder="Enter Emailid" fullWidth></TextField>
                <p className="textColor">{error.email}</p>
                <TextField label="Password" name='password' onChange={handleInputChange} placeholder="Enter password" type="password" fullWidth></TextField>
                <p className="textColor"> {error.password}</p>

                <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
                <Button type="submit" color="primary" variant="contained" fullWidth onClick={OnSubmitClick} >Login</Button>
                {/* <Typography> <Link href="#">Forget password</Link></Typography> */}
                <Typography> Do you have an account?<Link href="/signup">Sign Up</Link></Typography>
            </Paper>
        </Grid>



    )

}
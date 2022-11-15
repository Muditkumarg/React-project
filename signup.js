import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const initialState = { firstName: "", lastName: "", email: "", password: "" }
    const [data, setData] = React.useState(initialState);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    }
    const registration = () => {
        axios.post('http://localhost:5000/api/registration', data).then((res) => {
            const { message, success, result } = res.data;
            if (success) {
                swal({
                    text: message,
                    icon: "success"
                }).then(() => {
                    setData(result);
                    navigate('/');
                })
            }
        })
    }
    const [errors, setErrors] = React.useState({});
    const handleValidate = (formValues) => {
        let errors = {};
        if (!formValues.firstName) {
            errors.firstName = "first name is required."}
        if (!formValues.lastName) {
            errors.lastName = "last name is required."}
        if (!formValues.email) {
            errors.email = "email is required."}
        if (!formValues.password) {
            errors.password = "password is required."
        }
        setErrors(errors);
    }
    const navigate = useNavigate();
    const handleSubmit = () => {
        handleValidate(data);
        registration();
    }
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{marginTop: 8, display: 'flex',flexDirection: 'column',alignItems: 'center', }} >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">   Sign up</Typography>
                <Box sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField autoComplete="given-name" name="firstName" fullWidth required id="firstName"  label="First Name"  autoFocus onChange={handleInputChange}/>
                            <p className="textColor">{errors.firstName}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth id="lastName"label="Last Name" name="lastName" autoComplete="family-name" onChange={handleInputChange}/>
                            <p className="textColor">{errors.lastName}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email"  onChange={handleInputChange} />
                            <p className="textColor">{errors.email}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField required fullWidth  name="password" label="Password" type="password" id="password"  autoComplete="new-password" onChange={handleInputChange} />
                            <p className="textColor">{errors.password}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email." />
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleSubmit} >Sign Up</Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
}


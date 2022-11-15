import React from "react";
import DataTable from "./Components/Grid/TableB";
import '../src/Components/Grid/index.css'
import Login from "./Components/Grid/Form.js";
import LoginPage from "./Components/loginpage";
import { Route, BrowserRouter,Routes } from "react-router-dom";
import SignUp from "./Components/signup";
export default function App() {
  return (

    <>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<LoginPage/>}/>

      <Route path="/tableB" element={
      <><Login/>
      <DataTable/>
      </>
    }
      />
      <Route path="/signup" element={<SignUp/>}/>
    
    </Routes>
    </BrowserRouter>
    
    {/* <LoginPage/>
      <Login />
      <DataTable /> */}
    </>

  )

}
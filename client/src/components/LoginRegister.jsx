import { React, useState } from "react";
import Axios from "axios";

export default function LoginRegister(){
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");
 
    const register = () => {
      Axios({
        method: "POST",
        data: {
          username: registerUsername,
          password: registerPassword,
        },
        withCredentials: true,
        url: "http://localhost:4000/register",
      }).then(function(res) {console.log(res.status)
      if(res.status === 200){
        alert("user registered")
      }});
      
    };
    const login = () => {
      Axios({
        method: "POST",
        data: {
          username: loginUsername,
          password: loginPassword,
        },
        withCredentials: true,
        url: "http://localhost:4000/login",
      }).then(function(res) {console.log(res)});
      window.location = "http://localhost:3000/"
    };
    
    return (
      <div className="container" >
        <div className="center-align ">
          <h1>Register</h1>
          <input className=" frm"
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          /><br/>
          <input
          className=" frm"
          type="password"
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          /><br/>
          <button className="btn btn-outline-primary" onClick={register}>Submit</button>
        </div><br/>
  
        <div className="center-align">
          <h1>Login</h1>
          <input
          className=" frm"
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          /><br/>
          <input
          className=" frm"
          type="password"
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          /><br/>
          <button className="btn btn-outline-primary" onClick={login}>Submit</button>
        </div>
  
       
      </div>
      )
}
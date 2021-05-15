import {React, useState} from "react";

import Axios from "axios";

export default function Home(){
    const [data, setData] = useState(null);

    Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:4000/user",
      }).then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  
    
    return(
        <div>
           {data ? <h1 className="container center-align">Welcome Back {data.username}</h1> : <div className="container center-align"><h1>Login to see this page</h1><br/>
           <a className="btn btn-outline-primary" href="http://localhost:3000/login">Login</a></div>}
        </div>
    )
}
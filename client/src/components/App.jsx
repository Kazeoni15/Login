import React from "react";
import '../index.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Home from "./Home"

function App() {
  
  return (
    <div>
      <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" exact component={LoginRegister} />
                
            </Switch>




            </Router>
    </div>
    
  )
}

export default App;

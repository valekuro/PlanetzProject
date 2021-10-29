import React from "react";
import Navbar from "./components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Crew from "./components/Crew";
import Destination from "./components/Destination";
import Technology from "./components/Technology";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/destination" component={Destination} />
        <Route path="/crew" component={Crew} />
        <Route path="/technology" component={Technology} />
      </Switch>
    </div>
  );
}

export default App;

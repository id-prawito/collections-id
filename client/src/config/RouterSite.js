import { Route, Switch } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";

const RouterSite = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    );
};

export default RouterSite;

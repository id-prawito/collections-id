import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";

const RouterSite = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    );
};

export default RouterSite;

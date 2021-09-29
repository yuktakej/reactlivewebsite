import React from "react";
import web from "../src/images/web.jpg";
import { NavLink } from "react-router-dom";
import "./index.css";
import Common from "./Common";
const Home =()=>{
    return (
        <>
            <Common  name="Welcome to Home page " imgsrc={web} visit='/services'  btname='Get Started'/>
        </>
    );
}

export default Home;
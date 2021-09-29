import React from "react";
import web from "../src/images/web.jpg";
import { NavLink } from "react-router-dom";
import "./index.css";
import Common from "./Common";
const About =()=>{
    return (
        <>
            <Common name="Welcome to About page " imgsrc={web} visit='/contact'  btname='Contact Now'/>
        </>
    );
}

export default About;
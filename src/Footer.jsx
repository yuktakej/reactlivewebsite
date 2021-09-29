import React from 'react'
import "./index.css";
const Footer = () => {
    let year = new Date().getFullYear();
    return (
        <>
       
        <footer className="w-100 bg-light text-center ">
            <p className="footer">copyright © {year} </p>
        </footer>
        </>
    )
}

export default Footer

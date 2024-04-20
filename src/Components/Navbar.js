import React from "react";

// import "../style.css"

function Navbar() {


    return(
        <nav className="navbar">
            <h1> Abhishek Shankar Choudhary</h1>
            <div className="menu">
                <a href="#">Home</a>
                <a href="#">About </a>
                <a href="#"> Blog</a>
                <a href="#"> Skills</a>
                <a href="#"> Qualifications</a>
            </div>
        </nav>
    )
}

export default Navbar;
import React from "react";



function Section(props){ // {title: "", description: ""}

    return(
        <div className="section">
            <hr />
            <h1> {props.title} </h1>
            <p> {props.description}</p>
        </div>
    )
}

export default Section
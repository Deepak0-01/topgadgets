import React from 'react';
import './Imglayout.css';

function Imglayout({date,desc}) {
    return (
        <div className="imglayout">

        <div className="imagelayout_layout">

        <h2>{date}</h2>
        <h1>{desc}</h1>

        </div>


            
        </div>
    )
}

export default Imglayout

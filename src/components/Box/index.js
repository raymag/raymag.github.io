import React from 'react';
import './styles.css';

export default function Box({bgColor, color, title, column, children}){
    return (
        <section className={column ? "react-box column" : "react-box"} style={{backgroundColor:bgColor, color: color}}>
            <h2 className="react-box-title">{title}</h2>
            {children}
        </section>
    )
}
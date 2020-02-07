import React from 'react';
import './styles.css'

export default function Postit({to, title, footer, dark}){
    return (
        <a href={to}
           target="_blank"
           title={title}
           footer={footer}
           rel="noopener noreferrer"
           className={dark ? "react-postit dark" : "react-postit"}>
            <div className="postit-header">
                <h3>{title}</h3>
            </div>
            <div className="postit-footer">
                {footer}
            </div>
        </a>
    );
}
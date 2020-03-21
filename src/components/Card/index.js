import React, {useState} from 'react';
import './styles.css';

export default function Card({to, title, thumbnail, body, footer, dark, simple, clean}){

    const [isLoading, setIsLoading] = useState(true);
    const [thumbnailState, setThumbnailState] = useState('loading');

    function showThumbnail(){
        setTimeout(()=>{
            setIsLoading(false);
            setThumbnailState('');
        }, 300);
    }

    return (
        <a href={to} target="_blank" title={title} rel="noopener noreferrer" className={ dark ? "react-card dark" : "react-card" }>
            <div className="card-header">
                {thumbnail && isLoading ? <img src="./assets/loading.gif" alt="loading" /> : ''}
                {thumbnail ? <img className={thumbnailState} onLoad={showThumbnail} src={thumbnail} alt="thumbnail" /> : ''}
                {simple ? '' : (<h3>{title}</h3>)}
            </div>
            {clean ? '' : (<div className={simple ? "card-body simple" : "card-body"}>
                {simple ? title : body}
            </div>)}
            {simple ? '' : (
                <div className="card-footer">
                    {footer}
                </div>
            )}
            
        </a>
    );
}
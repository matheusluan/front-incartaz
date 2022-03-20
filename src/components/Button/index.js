import React from 'react';

import './styles.css';
import '../../global.css'; 

export default function Button(props){
    return(
        <>
           <div className={props.tipo === "category" ? 'button_nav_category' : 'button_nav_distribuidora'}>
                <p>
                    {props.title}
                </p>
           </div>
        </>
    );
}
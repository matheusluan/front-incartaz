import React from 'react';

import './styles.css';
import '../../global.css';


export default function Card(props){
    return(
        <>
           <div className='card'>
                <img src={props.poster} alt="Logo do inCartaz" />
           </div>
        </>
    );
}
import React from 'react';

import './styles.css';
import '../../global.css';
import logo from '../../assets/img/Logo_light.svg'; 
import Menu from '../Menu';


export default function Nav(){
    return(
        <>
            <div className='nav_container'>
                <img src={logo} alt="Logo do inCartaz" />
                <span>Releases</span>
            </div>
            <Menu/>
        </>
    );
}
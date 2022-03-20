import React from 'react';

import './styles.css';
import '../../global.css'; 
import Button from '../Button';

export default function Menu(){
    return(
        <>
           <div className='menu_container'>
              <Button title="Marvel" tipo=""/>
              <Button title="DC" tipo=""/>
              <Button title="Films" tipo="category"/>
              <Button title="Series" tipo="category"/>
           </div>
        </>
    );
}
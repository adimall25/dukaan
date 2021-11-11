import React from 'react';
import Spinner from '../img/loading2.gif';

export default () => {
    return (
        <div style={{marginTop: '20%'}}>
            <img src = {Spinner} style={{width:'200px', margin:'auto', display: 'block'}} alt='Loading..' />
        </div>
    )
    
}
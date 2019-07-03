import React from 'react';
import './css/restaurants.css';

function Filter (){
    return(
        <span id="checkboxAndName">
            <label>Checkbox</label>
            <input id="filter" type="checkbox"/>
        </span>
    );
}
export default Filter;

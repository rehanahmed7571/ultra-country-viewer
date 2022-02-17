import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flag,population,region} = props.country;

    return (
        <div>
            <div className='single-country'>
                <h3>This is {name}</h3>
                <div className='flag'>
                <img src={flag} alt="" />
                </div>
                <p>pupulation: {population}</p>
                <p>Region: {region}</p>
                <button onClick={()=>{props.handleAddCountry(props.country)}}>add Country</button> <br />
          </div>
          
         
        </div>
    );
};

export default Country;
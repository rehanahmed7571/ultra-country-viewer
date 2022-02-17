import React from 'react';

const AddedCountry = (props) => {
   const addedCountry = props.addedCountry
//    let totalPopulation = 0

//     for(let i=0; i<addedCountry.length; i++){
//         const singleCountry = addedCountry[i]
//         totalPopulation = totalPopulation + singleCountry.population
//     }
console.log(addedCountry)
const  totalPopulation= addedCountry.reduce((sum,x)=>sum + x.population ,0)
    return (
        <div>
            <h4>this added country : {addedCountry.length} </h4>
            <h4>Total country population: {totalPopulation} </h4>
        </div>
    );
};

export default AddedCountry;
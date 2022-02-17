
import './App.css';
import { useEffect, useState } from 'react';
import Country from './compnents/country/Country';
import AddedCountry from './compnents/AddedCountry/AddedCountry';

function App() {
 const [countries, setCountries] = useState([])
 const [addedCountry, setAddedCountry]=useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res=> res.json())
    .then(data=>{
      setCountries(data)
    })
    .catch(error => console.log(error))

  },[])

  const handleAddCountry = (country) =>{
      const newAddCountry = [...addedCountry , country]
      setAddedCountry(newAddCountry)
  }

  return (
    <div className="App">
      <h1>All countries Name </h1>
      <h4>Country Added : {addedCountry.length}</h4>
      <AddedCountry addedCountry={addedCountry}></AddedCountry>
      {
         countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)

      }
      <header className="App-header">

   
      </header>
    </div>
  );
}

export default App;

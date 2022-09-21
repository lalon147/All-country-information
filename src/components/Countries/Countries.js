import "./countries.css"
import Country from "../Country/Country";
import { useState,useEffect } from "react";
export default function Countries(){
    const url="https://restcountries.com/v2/all"
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
       fetch(url)
      .then(res=>res.json())
      .then(data=>setCountries(data))
    },[])
     
    return(
      <div>
          <h1>Rest Countries</h1>
         <div id="countries">
         {
            countries.map(country=>{
             return <Country key={country.alpha3Code} country={country}></Country>
              
            })
          }
         </div>
      </div>
    )
  }
 
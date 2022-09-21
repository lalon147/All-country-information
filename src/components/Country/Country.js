
import "./country.css"
export default function Country(props){
  const {name,region,population,area}=props.country
  
  
    return (
     <div className="country">
       <h2>NAME:{name}</h2>
       <p>POPULATION{population}</p>
       <p>{area}</p>
       <p>{region}</p>
     </div>
    )
 }
 
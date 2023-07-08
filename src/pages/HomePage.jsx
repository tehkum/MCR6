import { Link } from "react-router-dom";
import DishCart from "../components/DishCard";
import { useItems } from "../context/ItemContext";
import "./Hompage.css";
import { useState } from "react";

export default function HomePage(){
    const {cuisineType, restaurantData} = useItems();
    const [ filterType, setFilterType ] = useState(false);

    const filter = filterType ? restaurantData.filter(item=>+item.cuisine_id === filterType) : restaurantData;

    return <>
    <div className="container-1">
        <h1>FOOD ORDERING APP</h1>
        <h3>Select your cuisine</h3>
        <div className="cuisine-sec">{
            cuisineType.map(cuisine=><div className="cuisineButton" onClick={()=>setFilterType(+cuisine.id)} key={cuisine.id}>{cuisine.name}</div>)
        }</div>
        {filterType && <button style={{margin: "10px"}} onClick={()=>setFilterType(false)}>❌</button>}
    </div>
    <div className="container-2">
        {filter.map(restaurant=><div>
            <Link style={{color: "black", textDecoration: "none"}} to={`/restaurant/${restaurant.id}`}><h3 className="dish-name">Dishes By {restaurant.name}</h3>
            <div className="dish-details">{restaurant.menu.map(items=><DishCart restaurantData={restaurant} dishData={items}/>)}</div></Link>
        </div>)}
    </div>
    </>
}
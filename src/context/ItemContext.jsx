import { createContext, useContext, useState } from "react";
import { cuisineData, restaurantsData } from "../Data";

export const manageItem = createContext();

export function ItemContext({children}){
    const [ cuisineType, setCuisineType ] = useState([...cuisineData]);
    const [ restaurantData, setRestaurantData ] = useState([...restaurantsData])


    return <manageItem.Provider value={{ cuisineType, restaurantData, setRestaurantData }}>{children}</manageItem.Provider>
}

export const useItems = () => useContext(manageItem);
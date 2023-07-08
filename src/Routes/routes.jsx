import { Route, Routes } from "react-router";
import HomePage from "../pages/HomePage";
import RestaurantDetail from "../pages/RestaurantDetail";

export default function AllRoutes(){
    return <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/restaurant/:rId" element={<RestaurantDetail />}/>
    </Routes>
}
import { NavLink } from "react-router-dom";

export default function Header(){
    return <>
        <NavLink to="/" style={{color: "black", fontSize:"20px", fontWeight:"bold", textDecoration: "none"}}>⟵Back</NavLink>
    </>
}
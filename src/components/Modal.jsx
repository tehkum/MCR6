import { useState } from "react";
import "./Modal.css";
import { useItems } from "../context/ItemContext";

export default function Modal({ show, set, resId }){
    const { restaurantData, setRestaurantData } = useItems();
    const [ newReview, setReview ] = useState({
        rating: "",
        comment: "",
        revName: "Anonymous",
        pp: "https://randomuser.me/api/portraits/men/7.jpg"
    })

    const eventHandler = (e) => {
        const { name, value } = e.target;
        setReview({...newReview, [name]: value})
        console.log(newReview);
    }

    const submitHandler = () => {
        restaurantData.find(item=>+item.id === +resId).ratings.push(newReview);
        setRestaurantData([...restaurantData]);
        setReview({
            rating: "",
            comment: "",
            revName: "Anonymous",
            pp: "https://randomuser.me/api/portraits/men/7.jpg"
        })
        set(false)
    }


    return <div className="modal-sides" style={{display: show ? "flex" : "none"}}>
        <div className="modal-main">
            <button onClick={()=>set(false)}>❌</button>
            <h1>Add Review</h1>
            <hr />
            <div className="modal-inputs">
                <label>rating:</label>
                <select name="rating" onChange={eventHandler} value={newReview.rating}>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="modal-inputs">
                <label>Comment:</label>
                <textarea onChange={eventHandler} className="rev-new-comm" name="comment" value={newReview.comment}></textarea>
            </div>
            <div className="modal-submit"><button className="sub-btn" onClick={submitHandler}>Submit</button></div>
        </div>
    </div>
}
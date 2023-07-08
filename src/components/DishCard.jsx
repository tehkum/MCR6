import "./Dishcart.css";

export default function DishCart({restaurantData, dishData}){
    return <div className="dish-cart">
        <img src={dishData.imgSrc} alt="..." className="dish-cart-img" width="270" height="320"/>
        <div className="dish-cart-det">
            <p className="dish-cart-name"><strong>{dishData.name}</strong></p>
            <p className="dish-cart-price">Rs.{dishData.price} for {dishData.qty}</p>
            <p className="dish-cart-price">{restaurantData.name}</p>
        </div>
    </div>
}
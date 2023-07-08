import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useItems } from "../context/ItemContext";
import "./Rest.css";
import Modal from "../components/Modal";
import Header from "../components/Header";

export default function RestaurantDetail() {
  const { rId } = useParams();
  const { restaurantData } = useItems();
  const [thisRestaurant, setRestaurant] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setRestaurant(restaurantData.find((items) => +items.id === +rId));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rId]);

  return (<div style={{position: 'relative'}}>
    <Header />
    <div className="rest-box">
      <div className="restaurants">
        <div>
          <div className="rest-name">{thisRestaurant.name}</div>
          <div className="rest-menu rest-desc">
            {thisRestaurant?.menu?.map((dish) => (
              <p style={{ marginTop: "5px", marginBottom: "0" }}>
                {dish.name},
              </p>
            ))}
          </div>
          <div className="rest-address rest-desc">
            {thisRestaurant?.address}
          </div>
          <div className="rest-avg-rate rest-desc">
            Average Rating: {thisRestaurant?.averageRating}
          </div>
        </div>
        <div>
          <button className="cuisineButton" onClick={()=>setShowModal(true)}>Add Review</button>
        </div>
      </div>
      <hr />
      <div className="restaurant-reviews">
        <h1>Reviews</h1>
        {thisRestaurant?.ratings?.map((rev) => (
          <div className="rev-box">
            <div className="review-top">
              <div className="review-sec-1">
                <img
                  src={rev?.pp}
                  alt="..."
                  className="pp-image"
                  width="50"
                  height="50"
                />
                <h4>{rev?.revName}</h4>
              </div>
              <div>{rev?.rating} ⭐</div>
            </div>
            <p>{rev?.comment}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
    <Modal show={showModal} set={setShowModal} resId={rId}/>
  </div>);
}

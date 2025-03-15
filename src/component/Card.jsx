import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function Card({ img, title, price, description,addToCart }) {
  const [isAdded, setIsAdded] = useState(false);
  const navigate = useNavigate(); 

  const handleAddToCart = () => {
    addToCart({ img, title,description, price });
    setIsAdded(true);
  };

  const handleBuyNow = () => {
    navigate("/buy", { state: { item: { img, title, price,description } } }); // Sending item object
  };

  return (
    <div className="pricing-card">
      <img src={img} alt="sunglasses" className="cardimg" />
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">{description}</p>
        </div>
        <div className="card-price">
          <p>
            <span className="price">price : {price} PKR</span>
          </p>
        </div>
      </div>
      <div className="card-footer">
        <button className="button" onClick={handleBuyNow}>Buy Now</button>
        <button
          className={`button ${isAdded ? "added" : ""}`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? "Added" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
}

export default Card;

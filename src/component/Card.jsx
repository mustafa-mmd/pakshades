
// import "./Card.css";
// function Card(props) {
//   return (
//     <>
//       <div className="pricing-card">
//         <img src={props.img} alt="sunglasses" className="cardimg"/>
//         <div className="card-content">
//           <div className="card-header">
//             <h2 className="card-title">Brand</h2>
//             <p className="card-subtitle">Add description here.</p>
//           </div>
//           <div className="card-price">
//             <p>
//               <span className="price">$25</span>
//             </p>
//           </div>
//         </div>
//         <div className="card-footer">
//           <a href="#" className="button">
//             Buy Now
//           </a>
//           <a href="#" className="button">
//             AddToCart
//           </a>

//         </div>
//       </div>
//     </>
//   );
// }

// export default Card;
// import React from "react";
// import "./Card.css";

// function Card({ img, title, price, addToCart }) {
//   return (
//     <div className="pricing-card">
//       <img src={img} alt={title} className="cardimg"/>
//       <div className="card-content">
//         <div className="card-header">
//           <h2 className="card-title">{title}</h2>
//           <p className="card-subtitle">Stylish and comfortable sunglasses.</p>
//         </div>
//         <div className="card-price">
//           <p>
//             <span className="price">${price}</span>
//           </p>
//         </div>
//       </div>
//       <div className="card-footer">
//         <button className="button">Buy Now</button>
//         <button className="button" onClick={() => addToCart({ img, title, price })}>
//           Add to Cart
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Card;

import React from "react";
import "./Card.css";

function Card({ img, title, price, addToCart }) {
  return (
    <div className="pricing-card">
      <img src={img} alt="sunglasses" className="cardimg"/>
      <div className="card-content">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
          <p className="card-subtitle">Stylish sunglasses for you!</p>
        </div>
        <div className="card-price">
          <p>
            <span className="price">${price}</span>
          </p>
        </div>
      </div>
      <div className="card-footer">

        <button className="button" onClick={() => addToCart({ img, title, price })}>
          Add To Cart
        </button>
<button className="button">Buy Now</button>
      </div>
    </div>
  );
}

export default Card;


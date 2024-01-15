import React from "react";
import '../Styles/ProductCard.css'

const ProductCard = (props) => {
    const{title,image, price} = props
  return (
    <div className="card">
      <div className="card-image" />
      <img src={image} alt="" />
      <p className="card-title">{title}</p>
      <p className="card-body">
        Nullam ac tristique nulla, at convallis quam. Integer consectetur mi nec
        magna tristique, non lobortis.
      </p>
      <p className="footer">
        Written by <span className="by-name">John Doe</span> on{" "}
        <span className="date">25/05/23</span>
      </p>
    </div>
  );
};

export default ProductCard;

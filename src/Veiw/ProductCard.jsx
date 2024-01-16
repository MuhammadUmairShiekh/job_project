import React from "react";
import "../Styles/ProductCard.css";
import { NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";
import { motion } from "framer-motion";

const ProductCard = (props) => {
  const { title, image, price } = props;
  return (
    <Col lg="12" md="4" className="mb-2">
      <div className="product_item">
        <div className="product_img">
          <NavLink to={"`/Shop/${item.id}`"}>
            <motion.img
              src={image}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0 }}
              transition={{
                duration: 1.1,
                ease: "easeOut",
                delay: 0.8,
              }}
              whileInView={{ opacity: 1 }}
              alt=""
            />
          </NavLink>
        </div>
        <div className="product_info">
          <NavLink to={"ko"}>
            <h3 className="product_name">{title}</h3>
          </NavLink>
          <p className="product_P">{"item.category"}</p>
        </div>

        <div className="product_card-bottom p-4">
          <span className="price"> PKR {price}</span>
          <motion.span whileTap={{ scale: 1.3 }} >
            {" "}
            <i class="ri-add-fill"></i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home_Page from "../Images/mobile-app2.gif";
import { motion } from "framer-motion";
import "../Styles/Home.css";
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";

const Home = () => {
  const [productData, setProductData] = useState([]);
  const [ring, setRing] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    const data = fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductData(data));
  }

  // let data1 = fetch("https://fakestoreapi.com/products/categories")
  //   .then((res) => res.json())
  //   .then((data1) => setRing(data1));
  // const filterData = data1.filter((item) => item.category === "men's clothing");
  // setRing(filterData);

  const year = new Date().getFullYear();

  return (
    <>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ x: [-900, 0] }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                  delay: 0.9,
                }}
                whileInView={{ opacity: 1 }}
              >
                <p className="hero_subtitle"> Trending Product In {year}</p>
                <h2>Make Your Interior More Minimalistic & Modern</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Neque unde itaquelaborum numquam ullam sequi vero, incidunt
                  quisquam eaque veritatis?
                </p>
              </motion.div>
              <motion.span
                initial={{ opacity: 0 }}
                transition={{
                  duration: 1.4,
                  ease: "easeOut",
                  delay: 0.9,
                }}
                whileInView={{ opacity: 1 }}
              >
                {console.log(ring)}
                <motion.button whileTap={{ scale: 1.4 }} className="buy_btn">
                  <NavLink to={"/Product"}>All_PRODUCTS</NavLink>
                </motion.button>
              </motion.span>
            </Col>
            <Col lg="6" md="12">
              <div className="">
                <motion.div
                  className="hero_img"
                  initial={{ opacity: 0 }}
                  animate={{ x: [700, 0] }}
                  transition={{
                    duration: 1.1,
                    ease: "easeOut",
                    delay: 1.1,
                  }}
                  whileInView={{ opacity: 1 }}
                >
                  <img src={Home_Page} alt="" />
                </motion.div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col>
              <div className="product"> 
                <h2>Products</h2>
              </div>
              <div className="main">
                {productData.map((item) => {
                  return (
                    <div>
                      <ProductCard
                        title={item.title}
                        image={item.image}
                        price={Math.round(item.price)}
                        category={item.category}
                        btn={("/Product/") + item.id}
                      />
                    </div>
                  );
                })}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

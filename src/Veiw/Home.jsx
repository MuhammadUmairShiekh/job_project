import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home_Page from "../Images/hero_image.png";
import { motion } from "framer-motion";
import "../Styles/Home.css";
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";
import UseGetData from "./UseGetData";
import Slider from "./Slider";
import { Typewriter } from "react-simple-typewriter";
import Footer from "../Footer/Footer";
import Products from "./Products";
import Swal from "sweetalert2";

const Home = () => {
  const [productData, setProductData] = useState();
  const [ring, setRing] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  function getData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => setProductData(res));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // Swal.fire({
      //   title: "Men T-Shirt",
      //   text: "Men T-Shirt Limited Order",
      //   imageUrl: "https://www.hangree.com.pk/cdn/shop/files/15f0227d-9059-42e6-ae73-d3ca345cb39f_2000x.jpg?v=1696689487",
      //   imageWidth: 400,
      //   imageHeight: 200,
      //   imageAlt: "Custom image",
      //   button: "Order Now"
      // });
    
      Swal.fire({
        title: "<strong><u>Men T-Shirt</u></strong>",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
        text: ` Men T-Shirt Limited Order <br/> 3900`,
        imageUrl:
          "https://www.hangree.com.pk/cdn/shop/files/15f0227d-9059-42e6-ae73-d3ca345cb39f_2000x.jpg?v=1696689487",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
          <i class="fa fa-thumbs-up"></i> Order Now!
        `,

        // confirmButtonAriaLabel: "Thumbs up, great!",
        // cancelButtonText: `
        //   <i class="fa fa-thumbs-down"></i>
        // `,
        // cancelButtonAriaLabel: "Thumbs down",
      });
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

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
                <span> {<Products />}</span>
                <h2>Make Your Fashion More</h2>
                <h4
                  style={{
                    // paddingTop: "5rem",
                    margin: "auto 0",
                    fontWeight: "normal",
                    inline: "block",
                  }}
                >
                  Fashion Designing Modern{" "}
                  <span
                    style={{
                      color: "#142769",
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    <Typewriter
                      words={[
                        "Men-Shirts",
                        "Men-Pants",
                        "Men-Accessories",
                        "Men-Kurta",
                        "classic",
                        "traditional",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      // onLoopDone={handleDone}
                      // onType={handleType}
                    />
                  </span>
                </h4>
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
                <motion.button whileTap={{ scale: 1.4 }} className="buy_btn">
                  <NavLink to={"/Product"}>All_PRODUCTS</NavLink>
                </motion.button>
              </motion.span>
            </Col>
            <Col lg="6" md="8" sm="12">
              <div className="img_upper">
                <div className="imag">
                  {/* <motion.div
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
                </motion.div> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="product">
                <h2 id="Product">Products list</h2>
              </div>

              <div className="main">
                {!productData ? (
                  <div class="loader"></div>
                ) : (
                  productData.map((item) => {
                    return (
                      <div>
                        <ProductCard
                          title={item.title}
                          image={item.image}
                          price={Math.round(item.price)}
                          category={item.category}
                          btn={"/Product/" + item.id}
                        />
                      </div>
                    );
                  })
                )}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <div className="slider">
        <Slider />
      </div> */}

      <Footer />
    </>
  );
};

export default Home;

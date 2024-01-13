import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Home_Page from "../Images/Home Page.png";

const Home = () => {
  return (
    <>
      <section className="hero_section">
        <Container>
          <Row>
            <Col lg="6">
              <img src={Home_Page} />
            </Col>
            <Col lg="6">
              <img src={Home_Page} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;

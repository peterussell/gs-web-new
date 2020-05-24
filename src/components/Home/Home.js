import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Home.scss';

// Images
import logo from '../../assets/images/logo-main.png';

const Home = () => {
  return (
    <Container fluid className="p-0 hero-background d-flex align-items-center">
      <Container>
        <Row className="d-flex justify-content-center">
          
          <Col xs={12} md="auto"><img src={logo} alt="GroundSchool NZ" /></Col>

          <Col xs={12} lg={5} md={8} className="pl-4 d-flex flex-column justify-content-center">
            <h1 className="intro__title">WELCOME TO GROUND SCHOOL</h1>
            <h3 className="intro__description">
              Online flight training resources to help you study 
              for the CAA New Zealand aviation theory exams.
            </h3>
            <h3 className="intro__description">
              Proudly made in New Zealand by Kiwi pilots.
            </h3>
          </Col>

        </Row>
      </Container>
    </Container>
  )
};

export default Home;
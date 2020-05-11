import React from 'react';
import './NavBar.scss';
import { Container, Row, Col } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Container fluid className="navBar">
            <Row>
                <Col>Hello</Col>
                <Col>Again</Col>
            </Row>
        </Container>
    );
};

export default NavBar;
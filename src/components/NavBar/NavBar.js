import React from 'react';
import { Container, Row, Col, Nav, Button } from 'react-bootstrap';

import './NavBar.scss';

const NavBar = () => {
    return (
        <Container fluid className="nav-bar py-3">
            <Container fluid="md">
                <Row>
                    <Col xs="auto">
                        <span className="site-title">GroundSchool NZ</span>
                    </Col>
                    <Col className="d-none d-md-block">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/exams">Practice Exams</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col className="d-none d-md-block" xs="auto">
                      <Button variant="outline-light">Register</Button>
                      <Button variant="outline-light">Sign In</Button>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default NavBar;
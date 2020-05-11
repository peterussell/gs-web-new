import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

import './NavBar.scss';

const NavBar = () => {
    return (
        <Container fluid className="nav-bar py-3">
            <Container fluid="md">
                <Row>
                    <Col xs="auto">
                        <span className="site-title">GroundSchool NZ</span>
                    </Col>
                    <Col>
                        <Nav>
                            <Nav.Item>
                                <Nav.Link href="/exams">Exams</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="/contact">Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default NavBar;
import React, { Component } from 'react';
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import '../App';

import Obout from '../assets/Obout.jpeg'
import Design from '../assets/Design.jpeg'
import Master from '../assets/Master.jpeg'
import Outo from '../assets/Outo.jpeg'
import Sotr from '../assets/Sotr.jpeg'

class About extends Component {
    render() {
        return (
            <Container className="top_marg">
                <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
                    <Row>
                        <Col sm={3}>
                            <Nav variant='pills' className='flex-column mt-2'>
                                <Nav.Item>
                                    <Nav.Link eventKey='first'>О нас</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='second'>Сотрудники</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='third'>Мастерские</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fourth'>Авто</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey='fifth'>Дизайн</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey='first'>
                                    <img
                                        src={Obout}
                                        className='tab_img'
                                    />
                                    <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                                         lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='second'>
                                    <img
                                        src={Design}
                                        className='tab_img'
                                    />
                                    <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                                         lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='third'>
                                    <img
                                        src={Master}
                                        className='tab_img'
                                    />
                                    <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                                         lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fourth'>
                                    <img
                                        src={Outo}
                                        className='tab_img'
                                    />
                                    <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                                         lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey='fifth'>
                                    <img
                                        src={Sotr}
                                        className='tab_img'
                                    />
                                    <p>Lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                                         lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem lorem lorem loremlorem lorem lorem lorem lorem lorem 
                                         lorem lorem lorem loremlorem lorem lorem lorem lorem lorem lorem lorem 
                                         lorem lorem</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        );
    }
}

export default About;
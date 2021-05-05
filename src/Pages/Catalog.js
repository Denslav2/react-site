import React, { Component } from 'react';
import { Container, Row, Col, ListGroup, Card, Alert } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Obout from '../assets/Obout.jpeg'
import Design from '../assets/Design.jpeg'
import Master from '../assets/Master.jpeg'
import Card1 from '../assets/Card1.jpeg'

import '../App';

class Catalog extends Component {
    render() {
        return (
            <Container className='top_marg'>
                <Row>
                    <Col md='9'>
                        <Alert variant="info">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <img
                                src={Obout}
                                className='catalog_img'
                            />
                            <p>
                                Aww yeah, you successfully read this important alert message. This example
                                text is going to run a bit longer so that you can see how spacing within an
                                alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice
                                and tidy. <Alert.Link as={Link} to='/fullpage'>More</Alert.Link>
                            </p>
                        </Alert>
                        <Alert variant="info">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <img
                                src={Design}
                                className='catalog_img'
                            />
                            <p>
                                Aww yeah, you successfully read this important alert message. This example
                                text is going to run a bit longer so that you can see how spacing within an
                                alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice
                                and tidy. <Alert.Link as={Link} to='/fullpage'>More</Alert.Link>
                            </p>
                        </Alert>
                        <Alert variant="info">
                            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                            <img
                                src={Master}
                                className='catalog_img'
                            />
                            <p>
                                Aww yeah, you successfully read this important alert message. This example
                                text is going to run a bit longer so that you can see how spacing within an
                                alert works with this kind of content.
                            </p>
                            <hr />
                            <p className="mb-0">
                                Whenever you need to, be sure to use margin utilities to keep things nice
                                and tidy. <Alert.Link as={Link} to='/fullpage'>More</Alert.Link>
                            </p>
                        </Alert>

                    </Col>
                    <Col md='3'>
                        <h5 className='text-center mt-5'>Категория</h5>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item><Alert.Link as={Link} to='/fullpage'>Авто</Alert.Link></ListGroup.Item>
                                <ListGroup.Item><Alert.Link as={Link} to="/about">Отзывы</Alert.Link></ListGroup.Item>
                                <ListGroup.Item><Alert.Link as={Link} to='/catalog'>Каталог</Alert.Link></ListGroup.Item>
                                <ListGroup.Item><Alert.Link as={Link} to='/contacts'>Контакты</Alert.Link></ListGroup.Item>
                            </ListGroup>
                        </Card>
                        <Card className='mt-3 bg-light'>
                            <Card.Body>
                                <Card.Title>Мастерская</Card.Title>

                                <Card.Text>
                                    <img
                                        src={Card1}
                                        className='blog_img'
                                    />
                                    <p>текст текст текст текст текст текст текст текст текст текст текст
                                    текст текст текст текст текст текст текст текст текст текст текст
                                    текст текст текст текст текст текст текст текст текст текст текст
                                    </p>
                                    <Link as={Link} to='/fullpage' className='my-link'>подробнее</Link>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Catalog;
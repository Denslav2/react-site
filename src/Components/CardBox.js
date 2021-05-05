import React, { Component } from 'react';
import { Container, CardDeck, Card, Button, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


import Card1 from '../assets/Card1.jpeg';
import Card2 from '../assets/Card2.jpeg';
import Card3 from '../assets/Card3.jpeg';

class CardBox extends Component {
    render() {
        return (
            <>
                <Container>
                    <h2 className='text-center m-4'>Наши сотрудники</h2>
                    <CardDeck>
                        <Card bg='secondary'>
                            <Card.Img variant='top'
                                src={Card1}
                            />
                            <Card.Body>
                                <Card.Title>Наши сотрудники</Card.Title>
                                <Card.Text>
                                    Lorem lorem lorem lorem loremloremlorem lorem lorem loremlorem lorem
                                </Card.Text>
                                <Link as={Link} to='/fullpage' className='my-link'>подробнее</Link>
                            </Card.Body>
                        </Card>
                        <Card bg='secondary'>
                            <Card.Img variant='top'
                                src={Card2}
                            />
                            <Card.Body>
                                <Card.Title>Наши сотрудники</Card.Title>
                                <Card.Text>
                                    Lorem lorem lorem lorem loremloremlorem lorem lorem loremlorem lorem
                                </Card.Text>
                                <Link as={Link} to='/fullpage' className='my-link'>подробнее</Link>
                            </Card.Body>
                        </Card>
                        <Card bg='secondary'>
                            <Card.Img variant='top'
                                src={Card3}
                            />
                            <Card.Body>
                                <Card.Title>Наши сотрудники</Card.Title>
                                <Card.Text>
                                    Lorem lorem lorem lorem loremloremlorem lorem lorem loremlorem lorem
                                </Card.Text>
                                <Link as={Link} to='/fullpage' className='my-link'>подробнее</Link>
                            </Card.Body>
                        </Card>
                    </CardDeck>
                </Container>
            </>
        );
    }
}

export default CardBox;
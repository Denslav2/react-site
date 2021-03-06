import React, { Component } from 'react';
import { Container, FormControl, Nav, Navbar, Form, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo192.png'

import Home from '../Pages/Home';
import About from '../Pages/About';
import Catalog from '../Pages/Catalog';
import Contacts from '../Pages/Contacts';
import Fullpage from '../Pages/Fullpage';

export default class Header extends Component {
    render() {
        return (
            <>
            <Router>
                <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                                alt='Logo'
                            /> React-Site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link as={Link} to='/'>Главная</Nav.Link>
                                <Nav.Link as={Link} to='/catalog'>Каталог</Nav.Link>
                                <Nav.Link as={Link} to="/about">О нас</Nav.Link>
                                <Nav.Link as={Link} to='/contacts'>Контакты</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <Button variant='outline-info'>Поиск</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/catalog' component={Catalog}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/contacts' component={Contacts}/>
                        <Route exact path='/fullpage' component={Fullpage}/>
                    </Switch>
                </Router>
            </>
        );
    }
}


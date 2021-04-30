import React, { Component } from 'react';
import { Container, FormControl, Nav, Navbar, Form, Button } from 'react-bootstrap';
import logo from './logo192.png'


export default class Header extends Component {
    render() {
        return (
            <>
                <Navbar fixed='top' collapseOnSelect expand='md' bg='dark' variant='dark'>
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height='30'
                                width='30'
                                className='d-inline-block align-top'
                                alt='Logo'
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collaps id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'>Главная</Nav.Link>
                                <Nav.Link href='/catalog'>Каталог</Nav.Link>
                                <Nav.Link href='/about'>Отзывы</Nav.Link>
                                <Nav.Link href='/contacts'>Контакты</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl
                                    type='text'
                                    placeholder='Search'
                                    className='mr-sm-2'
                                />
                                <Button variant='outline-info'>Поиск</Button>
                            </Form>
                        </Navbar.Collaps>
                    </Container>
                </Navbar>
            </>
        );
    }
}
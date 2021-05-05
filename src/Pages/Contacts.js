import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

export default class Contacts extends Component {
    render() {
        return (
            <Container className='contact-form' style={{width: '500px', height: '65vh'}}>
                <h1 className='text-center'>Свяжитесь с нами!</h1>
                <Form>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Ваш email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email'/>
                        <Form.Text>
                            Конфидинциальность гарантируется!
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                            <Form.Label>Добавте сообщение</Form.Label>
                            <Form.Control as='textarea' rows='3'/>
                    </Form.Group>
                    <Form.Group controlId='formBasicCheckbox'>
                            <Form.Check type='checkbox' label='Проверка'/>
                    </Form.Group>
                    <Button variant='primary' type='Submit'>Отправить</Button>
                </Form>
            </Container>
        );
    }
}
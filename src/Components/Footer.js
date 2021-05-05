import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className='footer'>
                    <Row>
                        <Col className='copy'>Все права защищенны. 2021. 	&copy;</Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;
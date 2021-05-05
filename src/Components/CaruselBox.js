import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Amg from '../assets/Amg.jpeg';
import Ferrari from '../assets/Ferrari.jpeg';
import Lamba from '../assets/Lamba.jpeg';
import '../App';

class CaruselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className='d-block carousel_img'
                        src={Amg}
                        alt='Auto'
                    />
                    <Carousel.Caption>
                        <h3>AMG</h3>
                        <p>Lorem ipsum orem ipsum orem ipsum orem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Ferrari}
                        alt='Auto'
                    />
                    <Carousel.Caption>
                        <h3>Ferrari</h3>
                        <p>Lorem ipsum orem ipsum orem ipsum orem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className='d-block w-100'
                        src={Lamba}
                        alt='Auto'
                    />
                    <Carousel.Caption>
                        <h3>Lamba</h3>
                        <p>Lorem ipsum orem ipsum orem ipsum orem ipsum</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}


export default CaruselBox;
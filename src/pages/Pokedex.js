import * as React from 'react';
import '../assest/style.css'
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';

export default function Pokedex() {
    return (
        <div className='podex'>
            <Navbar />
            <Container>
                <strong>Pokedex Page</strong>
            </Container>
        </div>
    )
}
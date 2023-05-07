import * as React from 'react';
import '../assest/style.css'
import Navbar from '../components/Navbar';
import { Container } from 'react-bootstrap';

export default function About() {
    return (
        <div className='podex'>
            <Navbar />
            <Container>
                <strong>About Page</strong>
            </Container>
        </div>
    )
}
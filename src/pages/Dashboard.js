import * as React from 'react';
import '../assest/style.css'
import Navbar from '../components/Navbar';
import { Button } from 'react-bootstrap';

export default function Dashboard() {
    return (
        <div className='podex'>
            <Navbar />
            <div className='middleTitle'>
                Welcome to
            </div>
            <div className='title'>
                Battle Pokemon
            </div>
            <div className='subTitle'>
                Battle Pokemon is a fun and enagaging way to battle
                between pokemons, wherther for casual play or move serious compatition between the pokemons.
            </div>
            <Button className='startBattle' variant="primary">Start Battle</Button>{' '}
            <div className='homeImage'>
            </div>
        </div >
    )
}
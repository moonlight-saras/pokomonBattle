import * as React from 'react';
import { useEffect, useState } from "react";
import '../assest/style.css'
import Navbar from '../components/Navbar';
import { Container, } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function History() {

    const [gameHistory, setGameHistory] = useState([]);

    useEffect(() => {
        const storedHistory = localStorage.getItem("gameHistory");
        if (storedHistory) {
            setGameHistory(JSON.parse(storedHistory));
        }
        console.log(storedHistory)
    }, []);

    const battleHistory = {
        marginTop: '5px',
        marginLeft: '33px',
        width: '247px',
        height: '35px',
        fontFamily: 'Kanit',
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '40px',
        lineHeight: '88%',
        textAlign: 'center',
        color: '#E8F3FF',
    }

    const battleTable = {
        marginTop: '5px',
        marginLeft: '33px',
        padding: '24px',
        gap: '24px',
        width: '1279px',
        height: '1216px',
        left: '0px',
        top: '0px',
        background: '#3383D2',
        borderRadius: '16px',
    }
    return (
        <div className='podex'>
            <Navbar />
            <div style={battleHistory}>Battle History</div>
            <div style={battleTable}>
                <Table striped="columns">
                    {gameHistory.map((item, index) => (
                        <thead>
                            <tr>
                                <th key={index}>
                                    {index + 1}
                                </th>
                                <th>Date<br />{item.newDate}</th>
                                <th>Time <br />{item.newTime}</th>
                                <th>{item.pokemonAName}</th>
                                <th>{item.pokemonBName}</th>
                                <th>Winner : {item.winner}</th>
                            </tr>
                        </thead>
                    ))}

                </Table>
            </div>
        </div>
    )
}
import * as React from 'react';
import { useEffect, useState } from "react";
import Search from '../components/Search';
import '../assest/style.css'
import Navbar from '../components/Navbar';
import { fetchPokemon } from '../services/getPokemon';
import PokemonData from '../components/PokemonData';
import { Alert, Row, Col, Button } from 'react-bootstrap';
import vs from '../images/vs.JPG';

const buttomStyle = {
  textAlign: 'center',
  marginLeft: '500px',
  marginRight: '500px',
  marginTop: '25px',
  padding: '16px 32px',
  width: '172px',
  height: '57px',
  borderRadius: '100px !important',
  border: '2px solid #9ACDFF !important',
}

const battleStart = {
  textAlign: 'center',
  color: '#fff',
  fontWeight: '400',
  fontSize: '40px',
}
const firstPokomon = {
  marginLeft: '33px',
  marginTop: '106px',
  color: '#fff',
}
const secondPokomon = {
  marginLeft: '33px',
  marginTop: '106px',
  color: '#fff',
}
export default function HomePage() {
  const [pokemon, setPokemon] = React.useState();
  const [pokemonB, setPokemonB] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState('');
  const [guess, setGuess] = useState("");
  const [gameResult, setGameResult] = useState("");
  const [gameHistory, setGameHistory] = useState([]);


  useEffect(() => {
    const storedHistory = localStorage.getItem("gameHistory");
    if (storedHistory) {
      setGameHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("gameHistory", JSON.stringify(gameHistory));
  }, [gameHistory]);


  const getPokemonOne = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a Pokemon');
      setError(true);
      return;
    }
    setError(false);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log(results);
        setPokemon(results);
      } catch (err) {
        console.log(err);
        setError(true);
        setErrorMsg('Pokemon not found.');
      }
    }, 1500);
  }

  let newTime = new Date().toLocaleTimeString();
  let newDate = new Date().toLocaleDateString();

  const [cTime, setCtime] = useState(newTime);
  const [cDate, setCdate] = useState(newDate);


  const getPokemonB = async (query) => {
    if (!query) {
      setErrorMsg('You must enter a Pokemon');
      setError(true);
      return;
    }
    setError(false);
    setTimeout(async () => {
      try {
        const response = await fetchPokemon(query);
        const results = await response.json();
        console.log("pokemonB", results);
        setPokemonB(results);
      } catch (err) {
        console.log(err);
        setError(true);
        setErrorMsg('Pokemon not found.');
      }

    }, 1500);
  }
  const handleGuessSubmit = () => {
    const winner = pokemon.hp > pokemonB.hp ? pokemon.name : pokemonB.name;
    alert(
      `The winner is ${winner}"
      `
    );

    const newTime = new Date().toLocaleTimeString();
    setCtime(newTime);
    const newDate = new Date().toLocaleDateString();
    setCdate(newDate);
    const result = `You guessed right! The winner  is ${winner}`;
    setGameResult(result);

    const gameHistoryItem = {
      pokemonAName: pokemon.name,
      pokemonBName: pokemonB.name,
      winner: winner,
      newTime: newTime,
      newDate: newDate,
    };

    setGameHistory((prevState) => [...prevState, gameHistoryItem]);
  }
  return (
    <div className='podex'>
      <Navbar />
      <div style={battleStart} >
        Let the Battle Begin
      </div>
      <Row >
        <Col xs={4} md={4}>
          <div style={firstPokomon}>Choose Your First Pokomon</div></Col>

        <Col xs={4} md={4}>
          <div style={secondPokomon}> </div></Col>

        <Col xs={4} md={4}>
          <div style={secondPokomon}>Choose Your Second Pokomon </div></Col>
      </Row>
      <Row>
        <Col xs={4} md={4}>
          {error ? (<Alert variant='danger'>{errorMsg}</Alert>) : null}

          <Search getPokemon={getPokemonOne} />

          {pokemon ? (
            <PokemonData
              name={pokemon.name}
              move={pokemon.moves}
              sprite={pokemon.sprites.front_default}
              abilities={pokemon.abilities}
              stats={pokemon.stats}
              types={pokemon.types} />

          ) : null

          }</Col>
        <Col>
          <img style={{
            marginLeft: '144px',
            marginTop: '58px',
          }} className='ctor' src={vs} alt="" />
        </Col>
        <Col xs={4} md={4}><Search getPokemon={getPokemonB} />
          {pokemonB ? (
            <PokemonData
              name={pokemonB.name}
              move={pokemon.moves}
              sprite={pokemonB.sprites.front_default}
              abilities={pokemonB.abilities}
              stats={pokemonB.stats}
              types={pokemonB.types} />
          ) : null
          }</Col>
      </Row>
      <Row>
        <div style={buttomStyle}>
          <Button block onClick={handleGuessSubmit}> Start Battle</Button>
        </div>
      </Row>
    </div>

  )

}
import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function PokemonData(props) {
  return (
    <Container style={{ marginLeft: '12px' }}>
      <div style={{
        width: '390px',
        height: '277px',
        background: '#FFFFFF',
        border: '4px solid rgba(255, 255, 255, 0.3)',
        borderRadius: '16px',
      }}>
        <Row>
          <Col xs={6} md={6} >
            <img className='images' src={props.sprite} alt={props.name} />
            <Col style={{
              alignItems: 'center',
              'textAlign': 'center',
              fontSize: '32px',
              lineHeight: '40px',
              color: '#212121'
            }}>{props.name}
              <p style={{
                alignItems: 'center',
                textAlign: 'center',
                fontWeight: '400',
                fontSize: '18px',
                lineHeight: '26px',
                color: '#636363',
              }}>{props.types[0].type.name}</p></Col>
          </Col>
          <Row>
            <Col xs={6} md={6}>
              <div style={{
                width: '161px',
                height: '26px',
                fontFamily: 'Kanit',
                fontStyle: 'normal',
                fontWeight: '500',
                fontSize: '24px',
                lineHeight: '26px',
                display: 'flex',
                alignItems: 'center',
                color: '#212121',
              }}>
                Pokomon Stats
              </div>
              <div style={{
                width: '189px',
                height: '40px',
                marginTop: '30px',
                borderWidth: '1px 0px',
                borderStyle: 'solid',
                borderColor: '#D4D4D4',
              }}>
                HP: {props.stats[0].base_stat}<br />
                <div style={{
                  fontWeight: '300',
                  fontSize: '18px'
                }}>Moves: {props.move[0].move.name}<br />
                  {props.move[1].move.name}<br />
                  {props.move[2].move.name}<br /></div>
              </div>
            </Col>
          </Row>
        </Row>
      </div>
    </Container>
  )
}
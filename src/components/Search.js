import * as React from 'react';
import { Form, Container, Col, Button, Row, Card } from 'react-bootstrap';

export default function Search(props) {

  const [search, setSearch] = React.useState('');

  return (
    <Container>
      <Row>
        <Col xs={12} md={12}>
          <Form className="ml-3 mx-3">
            <Form.Row className="align-items">
              <Col sm={8} className="my-1">
                <Form.Control
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search for Pokemon" />
              </Col>
              <Col sm={4} className="my-1">
                <Button variant="primary" onClick={(e) => props.getPokemon(search)}>Search</Button>{' '}
              </Col>
            </Form.Row>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
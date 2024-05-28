import './App.css'
import './phg-ashes.css';

import CardList from './CardList'
import { Col, Container, Row } from 'react-bootstrap'
import allCards from './data/all-cards.json';
import CardFilter from './CardFilter';

function App() {
  const sortedCards = allCards.results.sort((a, b) => a.type < b.type ? -1 : 1);

  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs={12} className='cardlist-container' >
          <CardFilter />
          <CardList allCards={sortedCards} />
        </Col>
      </Row>
    </Container>
  )
}

export default App

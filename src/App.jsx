import './App.css'
import './phg-ashes.css';

import CardList from './CardList'
import { Col, Container, Row } from 'react-bootstrap'
import CardFilter from './CardFilter';
import { useSelector } from 'react-redux';
import ZoomCard from './ZoomCard';

function App() {
  const allCards = useSelector((state) => state.viewer.allCards);
  const selectedCard = useSelector((state) => state.viewer.selectedCard);
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs={12} className='cardlist-container' >
          {selectedCard && (
            <ZoomCard card={selectedCard} />
          )}
          <>
            <CardFilter />
            <CardList allCards={allCards} />
          </>

        </Col>
      </Row>
    </Container>
  )
}

export default App

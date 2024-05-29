import './App.css'
import './phg-ashes.css';

import CardList from './CardList'
import { Col, Container, Row } from 'react-bootstrap'
import CardFilter from './CardFilter';
import { useSelector } from 'react-redux';
import ZoomCard from './ZoomCard';

function App() {
  let zoomCards = useSelector((state) => state.viewer.zoomCards);
  if (!Array.isArray(zoomCards)) {
    zoomCards = [zoomCards];
  }
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs={12} className='cardlist-container' >
          {zoomCards.length > 0 && (
            <ZoomCard cards={zoomCards} />
          )}
          <>
            <CardFilter />
            <CardList />
          </>

        </Col>
      </Row>
    </Container>
  )
}

export default App

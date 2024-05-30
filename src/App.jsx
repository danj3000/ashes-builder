import './App.css'
import './phg-ashes.css';

import CardList from './CardList'
import { Col, Container, Row } from 'react-bootstrap'
import CardFilter from './CardFilter';
import { useSelector } from 'react-redux';
import ZoomCard from './ZoomCard';
import DeckHeader from './DeckHeader';

function App() {
  let buildMode = useSelector((state) => state.viewer.buildMode);
  let zoomCards = useSelector((state) => state.viewer.zoomCards);
  if (!Array.isArray(zoomCards)) {
    zoomCards = [zoomCards];
  }
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs={12} className='cardlist-container' >
          {buildMode && <DeckHeader />}
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

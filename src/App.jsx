import './App.css'
import './phg-ashes.css';

import CardList from './CardList'
import { Col, Container, Row } from 'react-bootstrap'
import CardFilter from './CardFilter';
import { useSelector } from 'react-redux';
import ZoomCard from './ZoomCard';
import DeckHeader from './DeckHeader';
// import { useGetAllCardsQuery } from './services/ashteki';

function App() {
  // Using a query hook automatically fetches data and returns query values
  // const { data, error, isLoading } = useGetAllCardsQuery();

  let buildMode = useSelector((state) => state.viewer.buildMode);
  let zoomCards = useSelector((state) => state.viewer.zoomCards);
  if (!Array.isArray(zoomCards)) {
    zoomCards = [zoomCards];
  }
  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs={12} className='cardlist-container' >
          {/* <div >
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                <h3>{Object.values(data.cards).map(c => '.')}</h3>
              </>
            ) : null}
          </div> */}
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

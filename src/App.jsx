import './App.css'
import './phg-ashes.css';

import CardList from './CardList'
import { Col, Container, Row } from 'react-bootstrap'
import allCards from './data/all-cards.json';
import CardFilter from './CardFilter';
import { FilterContext } from './util';
import { useState } from 'react';


function App() {
  const [cardFilter, setCardFilter] = useState([]);
  const onFilterClick = (value) => {
    if (cardFilter.includes(value)) {
      cardFilter.splice(cardFilter.indexOf(value), 1);
    } else {
      cardFilter.push(value);
    }

    setCardFilter([...cardFilter]);
  }

  return (
    <Container >
      <Row className="justify-content-md-center">
        <FilterContext.Provider value={{ cardFilter, onFilterClick }}>
          <Col xs={12} className='cardlist-container' >
            <CardFilter />
            <CardList allCards={allCards.results} cardFilter={cardFilter} />
          </Col>
        </FilterContext.Provider>
      </Row>
    </Container>
  )
}

export default App

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
  const [catChecked, setCatChecked] = useState(true);

  const onFilterClick = (value) => {
    if (cardFilter.includes(value)) {
      cardFilter.splice(cardFilter.indexOf(value), 1);
    } else {
      cardFilter.push(value);
    }

    setCardFilter([...cardFilter]);
  }

  const onCatClick = () => {
    setCatChecked(!catChecked);
  }
  const sortedCards = allCards.results.sort((a, b) => a.type < b.type ? -1 : 1);

  return (
    <Container >
      <Row className="justify-content-md-center">
        <FilterContext.Provider value={{ cardFilter, onFilterClick, catChecked, onCatClick }}>
          <Col xs={12} className='cardlist-container' >
            <CardFilter />
            <CardList allCards={sortedCards} cardFilter={cardFilter} catChecked={catChecked} />
          </Col>
        </FilterContext.Provider>
      </Row>
    </Container>
  )
}

export default App

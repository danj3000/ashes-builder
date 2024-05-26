import './CardList.css';
import CardListItem from './CardListItem';
import Accordion from 'react-bootstrap/Accordion';

function CardList({ allCards, cardFilter }) {
    const filteredCards = allCards.filter(c => !cardFilter.length || (c.dice || []).some(d => cardFilter.includes(d)));
    const groupedCards = filteredCards.reduce((group, card) => {
        const { type } = card;
        group[type] = group[type] ?? [];
        group[type].push(card);
        return group;
    }, {});
    return (
        <Accordion className="card-list">
            {Object.keys(groupedCards).map((groupKey, index) => (
                <Accordion.Item eventKey={index} key={groupKey}>
                    <Accordion.Header>{groupKey}</Accordion.Header>
                    <Accordion.Body>
                        {groupedCards[groupKey].map((card) => <CardListItem key={card} card={card} />)}

                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export default CardList;

import './CardList.css';
import CardListItem from './CardListItem';
import Accordion from 'react-bootstrap/Accordion';
import catSpill from './data/catspill.json';

function CardList({ allCards, cardFilter, catChecked }) {
    // apply cat spill restrictions
    const catFreeCards = allCards.filter(c => !catChecked || !catSpill.banned.includes(c.stub));
    // mark partials
    catFreeCards.forEach(c => c.partial = catChecked && catSpill.partial.includes(c.stub));
    // apply dice filter
    const filteredCards = catFreeCards.filter(c => !cardFilter.length || (c.dice || []).some(d => cardFilter.includes(d)));
    // group
    const groupedCards = filteredCards.reduce((group, card) => {
        const { type } = card;
        group[type] = group[type] ?? [];
        group[type].push(card);
        return group;
    }, {});
    return (
        <Accordion className="card-list">
            {Object.keys(groupedCards).map((groupKey) => (
                <Accordion.Item eventKey={groupKey} key={groupKey}>
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

import './CardList.css';
import CardListItem from './CardListItem';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import CardGrid from './CardGrid';
import { Level } from './constants';

function CardList() {
    const allCards = useSelector((state) => state.viewer.allCards);

    // what are the filters (x3)
    const catChecked = useSelector((state) => state.cardFilter.catSpill)
    const showGrid = useSelector((state) => state.cardFilter.gridView)
    const magicFilter = useSelector((state) => state.cardFilter.magicFilter)
    const deckCards = useSelector((state) => state.cardFilter.deckCards);
    // build mode selections
    const selection = useSelector((state) => state.viewer.selection);
    const selectedPb = useSelector((state) => state.viewer.selectedPb);
    const buildMode = useSelector((state) => state.viewer.buildMode);

    let filteredCards = [];
    if (deckCards) {
        filteredCards = allCards.filter(c => selection.find(s => s.card === c))
    } else {
        // apply cat spill restrictions
        const catFreeCards = allCards.filter(c => !catChecked || !c.banned);
        // apply dice filter
        filteredCards = catFreeCards.filter(c => !magicFilter.length ||
            (c.altDice || c.dice || []).some(d => magicFilter.includes(d)) ||
            (c.dice && c.dice.every((d => d === Level.Basic)))
        );
        if (buildMode && selectedPb) {
            filteredCards = filteredCards.filter(c => !c.phoenixborn || c.phoenixborn === selectedPb.name);
        }
    }
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
                    <Accordion.Header>{`${groupKey} (${groupedCards[groupKey].length})`}</Accordion.Header>
                    <Accordion.Body>
                        {
                            showGrid ? (
                                <CardGrid cards={groupedCards[groupKey]} />
                            )
                                :
                                groupedCards[groupKey].map((card) => <CardListItem key={card.stub} card={card} />)
                        }
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    )
}

export default CardList;

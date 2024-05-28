import './CardList.css';
import CardListItem from './CardListItem';
import Accordion from 'react-bootstrap/Accordion';
import { useSelector } from 'react-redux';
import { imageUrl } from './util';
import { useDispatch } from "react-redux";
import { zoomCard } from "./features/viewerSlice";

function CardList({ allCards }) {
    const dispatch = useDispatch();
    const catChecked = useSelector((state) => state.cardFilter.catSpill)
    const showGrid = useSelector((state) => state.cardFilter.gridView)
    const magicFilter = useSelector((state) => state.cardFilter.magicFilter)

    // apply cat spill restrictions
    const catFreeCards = allCards.filter(c => !catChecked || !c.banned);
    // apply dice filter
    const filteredCards = catFreeCards.filter(c => !magicFilter.length || (c.dice || []).some(d => magicFilter.includes(d)));
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
                        {
                            showGrid ? (
                                <div className='gallery-grid'>
                                    {groupedCards[groupKey].map((card) => <img key={card.stub} className="gallery-card-image" src={imageUrl(card.stub)} onClick={() => dispatch(zoomCard(card))} />)}
                                </div>
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

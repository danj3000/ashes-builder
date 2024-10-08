import { useDispatch, useSelector } from 'react-redux';
import './DeckHeader.css'
import SimpleDie from './SimpleDie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { toggleDeckCards } from './features/cardFilterSlice';
import classNames from 'classnames';
import { zoomCard } from './features/viewerSlice';
// import { useAddDeckMutation } from './services/ashteki';

function DeckHeader() {
    const selectedPb = useSelector((state) => state.viewer.selectedPb);
    // const selection = useSelector((state) => state.viewer.selection);
    const selectedCount = useSelector((state) => state.viewer.selection.reduce(
        (agg, cardCount) => agg += cardCount.count, 0)
    );
    const diceTypes = useSelector((state) => state.viewer.selectedDice)
    const showDeckCards = useSelector((state) => state.cardFilter.deckCards);
    const dispatch = useDispatch();
    // const [addDeck] = useAddDeckMutation()

    const onSaveClick = () => {
        // confirm('save clicked');
        // // do savey stuff;
        // const deck = { phoenixborn: selectedPb.stub, cards: selection.map(s => ({ stub: s.stub, count: s.count })) }
        // addDeck(deck);
    }

    let pbClass = 'phoenixborn-image';
    if (selectedPb) {
        pbClass += ' ' + selectedPb.stub
    }
    const countClasses = classNames('count-icon', {
        active: showDeckCards
    })
    return (
        <div className='deck-wrapper'>
            <div className='deck-header'>
                <div className={pbClass} onClick={() => dispatch(zoomCard(selectedPb))}></div>
                <div className='dice-rack'>{diceTypes.map(m => (
                    <SimpleDie key={m} magic={m} />

                ))}</div>
                {/* <div className='card-count'>
                    <FontAwesomeIcon icon={faFloppyDisk}
                        onClick={() => {
                            onSaveClick();
                        }} />
                </div> */}
                <div className='card-count'>
                    <FontAwesomeIcon className={countClasses} icon={faClipboardList}
                        onClick={() => {
                            dispatch(toggleDeckCards());
                        }} />
                    {selectedCount}
                </div>
            </div>
        </div >
    )
}

export default DeckHeader;
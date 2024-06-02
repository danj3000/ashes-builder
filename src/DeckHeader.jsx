import { useSelector } from 'react-redux';
import './DeckHeader.css'
import SimpleDie from './SimpleDie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

function DeckHeader() {
    const selectedPb = useSelector((state) => state.viewer.selectedPb);
    const selectedCount = useSelector((state) => state.viewer.selection.reduce(
        (agg, cardCount) => agg += cardCount.count, 0)
    );
    const diceTypes = useSelector((state) => state.viewer.selectedDice)
    let pbClass = 'phoenixborn-image';
    if (selectedPb) {
        pbClass += ' ' + selectedPb.stub
    }
    return <div className='deck-header'>
        <div className={pbClass}></div>
        <div className='dice-rack'>{diceTypes.map(m => (
            <SimpleDie key={m} magic={m} />

        ))}</div>
        <div className='card-count'>
            <FontAwesomeIcon className='count-icon' icon={faClipboardList} />
            {selectedCount}</div>
    </div>
}

export default DeckHeader;
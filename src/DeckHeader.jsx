import { useSelector } from 'react-redux';
import './DeckHeader.css'
function DeckHeader() {
    const selectedCount = useSelector((state) => state.viewer.selection.length);

    return <div className='deck-header'>
        <div className='phoenixborn-image maeoni-viper'></div>
        <div className='card-count'>{selectedCount}</div>
    </div>
}

export default DeckHeader;
import DeckDice from './components/DeckDice';
import './DeckListItem.css'

function DeckListItem({ deck }) {
    let pbClass = 'phoenixborn-image';
    if (deck.phoenixborn) {
        pbClass += ' ' + deck.phoenixborn[0].id
    }

    return (
        <div className='deck-wrapper'>
            <div className='deck-header'>
                <div className={pbClass}></div>
                <div className='deck-title'>
                    {deck.name}
                    <DeckDice deck={deck} />
                </div>
            </div>
        </div >
    )
}

export default DeckListItem;
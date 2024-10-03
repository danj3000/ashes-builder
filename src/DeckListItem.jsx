import './DeckListItem.css'

function DeckListItem({ deck }) {
    let pbClass = 'phoenixborn-image';
    if (deck.phoenixborn) {
        pbClass += ' ' + deck.phoenixborn.stub
    }

    return (
        <div className='deck-wrapper'>
            <div className='deck-header'>
                <div className={pbClass}></div>
                <div className='deck-title'>{deck.title}</div>
            </div>
        </div >
    )
}

export default DeckListItem;
import DieIcon from './DieIcon';
import DieSlot from './DieSlot';
import './DeckDice.css';
import classNames from 'classnames';

const DeckDice = ({ deck, onDieClick, onDieHover, size }) => {
    const getDiceToRender = () => {
        // copying to prevent read-only error
        const dicepool = [].concat(deck.dicepool);
        const diceToRender = [];
        if (dicepool) {
            dicepool
                .sort((a, b) => (a.magic < b.magic ? -1 : 1))
                .forEach((diceCount) => {
                    for (let i = 0; i < diceCount.count; i++) {
                        diceToRender.push(
                            <DieIcon
                                // key={deck._id + 'die' + i}
                                die={{ magic: diceCount.magic, level: 'power' }}
                                onClick={() => onDieClick && onDieClick({ magic: diceCount.magic })}
                                onMouseOver={() => onDieHover && onDieHover({ magic: diceCount.magic })}
                                onMouseOut={() => onDieHover && onDieHover({ magic: '' })}
                            />
                        );
                    }
                });
        }
        for (let i = diceToRender.length; i < 10; i++) {
            diceToRender.push(<DieSlot />);
        }
        return diceToRender;
    };

    var diceToRender = getDiceToRender();
    const ddClasses = classNames('deck-dice', {
        large: size === 'large'
    });
    return <div className={ddClasses}>{diceToRender}</div>;
};

export default DeckDice;

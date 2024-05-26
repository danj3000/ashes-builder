import './SimpleDie.css'

function SimpleDie({ magic, onClick }) {
    let diceFont = 'phg-basic-magic';
    let description = magic;

    diceFont = `phg-${magic}-power`;
    let dieClass = 'die ' + magic;
    return (
        <span
            className={dieClass}
            onClick={() => onClick(magic)}
        >
            <span className={diceFont} title={description}></span>
        </span>
    );
}

export default SimpleDie;
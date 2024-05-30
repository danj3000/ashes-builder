import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { selectCard, reduceCard } from "./features/viewerSlice";
import { CardType } from './constants';

function BuilderControls({ card }) {
    const selection = useSelector((state) => state.viewer.selection.find(s => s.stub === card.stub));
    const cardCount = selection?.count || 0;
    const dispatch = useDispatch();
    const decClass = classNames("dec-control", {
        "active": cardCount > 0
    });
    const incClass = classNames("inc-control", {
        "active": cardCount < 3
    });

    return (<div className='builder-controls'>
        <FontAwesomeIcon className={incClass} icon={faPlusSquare}
            onClick={() => dispatch(selectCard(card))} />
        {card.type !== CardType.Phoenixborn && (
            <>
                <div className='count-control'>{cardCount}</div>
                <FontAwesomeIcon className={decClass} icon={faMinusSquare}
                    onClick={() => dispatch(reduceCard(card))} />
            </>
        )}
    </div>
    )
}

export default BuilderControls;
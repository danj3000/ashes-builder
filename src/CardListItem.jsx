import { Card } from "react-bootstrap";
import { imageUrl } from "./util";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { zoomCard } from "./features/viewerSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";
import BuilderControls from "./BuilderControls";
import { ConjurationTypes } from "./constants";

function CardListItem({ card }) {
    const dispatch = useDispatch();
    const catChecked = useSelector((state) => state.cardFilter.catSpill)
    const buildMode = useSelector((state) => state.viewer.buildMode)

    const classes = classNames('card-list-item', {
        partial: card.partial && catChecked
    });
    const showLinkedCard = card.linkedCards;
    return <Card className={classes}>
        <img className="card-image" src={imageUrl(card.stub)} onClick={() => dispatch(zoomCard(card))} />
        <div className="card-list-item-text">
            <span className="card-list-item-title">{card.name}</span>
            {showLinkedCard && <FontAwesomeIcon className="linked-card-icon"
                icon={faSquareArrowUpRight}
                onClick={() => dispatch(zoomCard(card.linkedCards))} />
            }
            <div>{card.text}</div>
        </div>
        {buildMode && !ConjurationTypes.includes(card.type) && <BuilderControls card={card} />}
    </Card>
}

export default CardListItem;
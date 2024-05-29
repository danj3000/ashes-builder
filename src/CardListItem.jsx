import { Card } from "react-bootstrap";
import { imageUrl } from "./util";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { zoomCard } from "./features/viewerSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

function CardListItem({ card }) {
    const dispatch = useDispatch();

    const classes = classNames('card-list-item', {
        partial: card.partial
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
    </Card>
}

export default CardListItem;
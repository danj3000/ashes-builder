import { Card } from "react-bootstrap";
import { imageUrl } from "./util";
import classNames from "classnames";
import { useDispatch } from "react-redux";
import { zoomCard } from "./features/viewerSlice";

function CardListItem({ card }) {
    const dispatch = useDispatch();

    const classes = classNames('card-list-item', {
        partial: card.partial
    });
    return <Card className={classes}>
        <img className="card-image" src={imageUrl(card.stub)} onClick={() => dispatch(zoomCard(card))} />
        <div className="card-list-item-text"><span className="card-list-item-title">{card.name}</span>
            <div>{card.text}</div>
        </div>
    </Card>
}

export default CardListItem;
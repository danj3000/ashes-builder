import { Card } from "react-bootstrap";
import { imageUrl } from "./util";
import classNames from "classnames";

function CardListItem({ card }) {
    const classes = classNames('card-list-item', {
        partial: card.partial
    });
    return <Card className={classes}>
        <img className="card-image" src={imageUrl(card.stub)} />
        <div className="card-list-item-text"><span className="card-list-item-title">{card.name}</span>
            <div>{card.text}</div>
        </div>
    </Card>
}

export default CardListItem;
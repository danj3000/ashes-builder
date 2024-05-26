import { Card } from "react-bootstrap";
import { imageUrl } from "./util";

function CardListItem({ card }) {
    return <Card className="card-list-item">
        <img className='card-image' src={imageUrl(card.stub)} />
        <div className="card-list-item-text"><span className="card-list-item-title">{card.name}</span>
            <div>{card.text}</div>
        </div>
    </Card>
}

export default CardListItem;
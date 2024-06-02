import { useDispatch } from "react-redux";
import { zoomCard } from "./features/viewerSlice";
import { imageUrl } from "./util";
import classNames from 'classnames';

function CardGrid({ cards }) {
    const dispatch = useDispatch();

    return <div className='gallery-grid'>
        {cards.map((card) => {
            const classes = classNames('gallery-card-image', {
                partial: card.partial
            });
            return <img key={card.stub}
                className={classes}
                src={imageUrl(card.stub)}
                onClick={() => dispatch(zoomCard(card))} />
        })}
    </div>
}

export default CardGrid;
import { useDispatch, useSelector } from "react-redux";
import { zoomCard } from "./features/viewerSlice";
import { imageUrl } from "./util";
import classNames from 'classnames';
import BuilderControls from "./BuilderControls";
import { ConjurationTypes } from "./constants";

function CardGrid({ cards }) {
    const dispatch = useDispatch();
    const buildMode = useSelector((state) => state.viewer.buildMode)

    return <div className='gallery-grid'>
        {cards.map((card) => {
            const classes = classNames('gallery-card-image', {
                partial: card.partial
            });
            return <div key={card.stub} className='gallery-card-wrapper'>
                <img
                    className={classes}
                    src={imageUrl(card.stub)}
                    onClick={() => dispatch(zoomCard(card))} />
                {buildMode && !ConjurationTypes.includes(card.type) && <BuilderControls card={card} />}
            </div>
        })}
    </div>
}

export default CardGrid;
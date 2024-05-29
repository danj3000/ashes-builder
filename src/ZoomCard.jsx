import { imageUrl } from "./util";
import { useDispatch } from "react-redux";
import { clearZoom } from "./features/viewerSlice";
import './ZoomCard.css';

function ZoomCard({ cards }) {
    const dispatch = useDispatch();

    const card = cards[0];
    return (
        <div className="zoom-container">
            <div className='zoom-wrapper'>
                <img className="zoom-image"
                    src={imageUrl(card.stub)}
                    onClick={() => dispatch(clearZoom())} />
            </div>
        </div>
    )
}

export default ZoomCard;
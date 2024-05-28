import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { imageUrl } from "./util";
import { faCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { clearZoom } from "./features/viewerSlice";
import './ZoomCard.css';

function ZoomCard({ card }) {
    const dispatch = useDispatch();

    return (
        <div className="zoom-container">
            <div className='zoom-wrapper'>
                <img className="zoom-image" src={imageUrl(card.stub)} onClick={() => dispatch(clearZoom())} />
            </div>
        </div>
    )
}

export default ZoomCard;
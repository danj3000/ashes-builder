import { imageUrl } from "./util";
import { useDispatch, useSelector } from "react-redux";
import { clearZoom, setZoomIndex } from "./features/viewerSlice";
import './ZoomCard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

function ZoomCard({ cards }) {
    const dispatch = useDispatch();
    const zoomIndex = useSelector((state) => state.viewer.zoomIndex);
    const buildMode = useSelector((state) => state.viewer.buildMode);

    const classes = classNames("zoom-container", {
        builder: buildMode
    })

    return (
        <div className={classes}>
            <div className='zoom-wrapper'>
                {zoomIndex > 0 && <FontAwesomeIcon icon={faCircleArrowLeft}
                    className='zoom-nav-left'
                    onClick={() => dispatch(setZoomIndex(zoomIndex - 1))} />}

                <img className="zoom-image"
                    src={imageUrl(cards[zoomIndex].stub)}
                    onClick={() => dispatch(clearZoom())} />
                {(zoomIndex < cards.length - 1) && <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className='zoom-nav-right'
                    onClick={() => dispatch(setZoomIndex(zoomIndex + 1))} />}
            </div>
        </div>
    )
}

export default ZoomCard;
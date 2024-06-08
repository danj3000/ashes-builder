import { ButtonGroup, Dropdown, ToggleButton } from "react-bootstrap";
import './CardFilter.css';
import { Magic } from "./constants";
import SimpleDie from "./SimpleDie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faGrip, faGripLines, faHammer } from "@fortawesome/free-solid-svg-icons";
import { toggleCatSpill, toggleDeckCards, toggleGridView, toggleMagicFilter } from "./features/cardFilterSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleBuildMode } from "./features/viewerSlice";

function CardFilter() {
    const dispatch = useDispatch()
    const catChecked = useSelector((state) => state.cardFilter.catSpill)
    const showGrid = useSelector((state) => state.cardFilter.gridView)
    const magicFilter = useSelector((state) => state.cardFilter.magicFilter)
    const buildMode = useSelector((state) => state.viewer.buildMode)
    const deckCards = useSelector((state) => state.cardFilter.deckCards)

    return <div className='card-filter'>
        <ButtonGroup className="mb-2">
            <ToggleButton
                className="toggle"
                id="toggle-check"
                type="checkbox"
                variant={catChecked ? 'warning' : 'secondary'}

                checked={catChecked}
                value="1"
                onChange={() => dispatch(toggleCatSpill())}
            >
                <FontAwesomeIcon icon={faCat} />
            </ToggleButton>
            <ToggleButton
                className="toggle"
                id="grid-check"
                type="checkbox"
                variant={showGrid ? 'warning' : 'secondary'}

                checked={showGrid}
                value="true"
                onChange={() => dispatch(toggleGridView())}
            >
                <FontAwesomeIcon icon={showGrid ? faGripLines : faGrip} />
            </ToggleButton>
            <ToggleButton
                className="toggle"
                id="mode-check"
                type="checkbox"
                variant={buildMode ? 'warning' : 'secondary'}

                checked={buildMode}
                value="true"
                onChange={() => {
                    dispatch(toggleBuildMode());
                    if (deckCards) {
                        dispatch(toggleDeckCards());
                    }
                }}
            >
                <FontAwesomeIcon icon={faHammer} />
            </ToggleButton>
        </ButtonGroup>
        <div className='dice-rack'>
            {magicFilter.map(m => (
                <SimpleDie key={m} magic={m} onClick={(magic) => dispatch(toggleMagicFilter(magic))} />
            ))}
        </div>
        <Dropdown>
            <Dropdown.Toggle
                className='filter-button'

                split
                id='dropdown-basic'
            >
                <span className='phg-basic-magic'></span>&nbsp;
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {Object.values(Magic).map(magic => (
                    <Dropdown.Item href='#' key={magic} onClick={() => dispatch(toggleMagicFilter(magic))}>
                        {magic}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>

    </div>
}

export default CardFilter;
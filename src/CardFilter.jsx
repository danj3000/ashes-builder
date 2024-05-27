import { ButtonGroup, Dropdown, ToggleButton } from "react-bootstrap";
import './CardFilter.css';
import { Magic } from "./constants";
import { FilterContext } from "./util";
import { useContext } from "react";
import SimpleDie from "./SimpleDie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faGrip, faGripLines } from "@fortawesome/free-solid-svg-icons";

function CardFilter() {
    const {
        cardFilter,
        onFilterClick,
        catChecked,
        onCatClick,
        showGrid,
        onGridClick
    } = useContext(FilterContext);

    return <div className='card-filter'>
        <ButtonGroup className="mb-2">
            <ToggleButton
                className="toggle"
                id="toggle-check"
                type="checkbox"
                variant={catChecked ? 'warning' : 'secondary'}

                checked={catChecked}
                value="1"
                onChange={() => onCatClick()}
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
                onChange={() => onGridClick()}
            >
                <FontAwesomeIcon icon={showGrid ? faGripLines : faGrip} />
            </ToggleButton>
        </ButtonGroup>
        {cardFilter.map(m => (
            <SimpleDie key={m} magic={m} onClick={(magic) => onFilterClick(magic)} />
        ))}

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
                    <Dropdown.Item href='#' key={magic} onClick={() => onFilterClick(magic)}>
                        {magic}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>

    </div>
}

export default CardFilter;
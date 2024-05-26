import { Dropdown } from "react-bootstrap";
import './CardFilter.css';
import { Magic } from "./constants";
import { FilterContext } from "./util";
import { useContext } from "react";
import SimpleDie from "./SimpleDie";

function CardFilter() {
    const {
        cardFilter,
        onFilterClick
    } = useContext(FilterContext);

    return <div className='card-filter'>
        {cardFilter.map(m => (
            <SimpleDie key={m} magic={m} />
        ))}

        <Dropdown
            autoClose='outside'
            className='ashes-live def'
            title='ashes.live'

        >
            <Dropdown.Toggle

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
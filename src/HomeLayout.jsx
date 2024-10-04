import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './HomeLayout.css'
import { logout } from './features/authSlice';
import { Button, ButtonGroup, Nav, ToggleButton } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faUser as faRegularUser } from '@fortawesome/free-regular-svg-icons';

export default function HomeScreen() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loggedIn = useSelector((state) => state.auth.token);
    const loginLinkClick = (event) => {
        event.preventDefault;
        if (loggedIn) {
            dispatch(logout());
        }
        else {
            navigate('login');
        }
    }

    return <div >
        <div className='home-menu'>
            <ButtonGroup className="mb-2">
                <ToggleButton
                    className="toggle"
                    variant="light"
                >
                    <LinkContainer to="/">
                        <Nav.Link><FontAwesomeIcon icon={faHome} /></Nav.Link>
                    </LinkContainer>
                </ToggleButton>
                <ToggleButton
                    className="toggle"
                    variant="warning"
                >
                    <LinkContainer to="/builder">
                        <Nav.Link><FontAwesomeIcon icon={faPlus} /></Nav.Link>
                    </LinkContainer>

                </ToggleButton>
            </ButtonGroup>
            <Button
                className="toggle mb-2"
                id="mode-check"
                // variant={'secondary'}
                value="true"
                onClick={(e) => loginLinkClick(e)}
            >
                <FontAwesomeIcon icon={loggedIn ? faRegularUser : faUser} />
            </Button>

        </div>
        <Outlet />

    </div>
}
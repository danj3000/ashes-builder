import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './features/authSlice';
import { Button, Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { faUser as faRegularUser } from '@fortawesome/free-regular-svg-icons';
import { LinkContainer } from 'react-router-bootstrap';

export default function HomeMenu() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loggedIn = useSelector((state) => !!state.auth.token)
    const loginLinkClick = (event) => {
        event.preventDefault;
        if (loggedIn) {
            dispatch(logout());
        }
        else {
            dispatch(navigate('login'))
        }
    }

    return (
        <Navbar>
            <LinkContainer to="/">
                <Navbar.Brand >
                    <FontAwesomeIcon icon={faHome} />
                </Navbar.Brand>
            </LinkContainer>
            <Nav>
                <LinkContainer to="/builder">
                    <Nav.Link>Add</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/builder">
                    <Nav.Link><FontAwesomeIcon icon={faPlus} /></Nav.Link>
                </LinkContainer>
            </Nav>
            <Button onClick={(e) => loginLinkClick(e)} className='ms-auto'>
                <FontAwesomeIcon icon={loggedIn ? faRegularUser : faUser} />
            </Button>
        </Navbar>

    )
}
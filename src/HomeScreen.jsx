import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeckList from "./DeckList";
import './HomeScreen.css'
import { logout } from './features/authSlice';
import { Button, ButtonGroup, Nav, ToggleButton } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faHome, faUser, faPlus } from "@fortawesome/free-solid-svg-icons";
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
        {loggedIn ? <DeckList /> : <div>You're not logged in. </div>
        }

    </div>
}
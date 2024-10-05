import { Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './HomeLayout.css'
import { logout } from './features/authSlice';
import { Button, ButtonGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGripVertical, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
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
                <Button
                    className="toggle"
                    variant="dark"
                    onClick={() => navigate('/')}
                >
                    <FontAwesomeIcon icon={faGripVertical} />
                </Button>
                <Button
                    className="toggle"
                    id="mode-check"
                    variant={loggedIn ? 'warning' : 'secondary'}
                    value="true"
                    onClick={(e) => loginLinkClick(e)}
                >
                    <FontAwesomeIcon icon={loggedIn ? faUser : faRegularUser} />
                </Button>
            </ButtonGroup>
            <div style={{ color: 'darkred' }}>
                <FontAwesomeIcon icon={faTriangleExclamation} />&nbsp;
                work<br />in progress</div>
        </div>
        <Outlet />

    </div>
}
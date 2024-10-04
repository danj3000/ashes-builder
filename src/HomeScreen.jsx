import { useSelector } from 'react-redux';
import DeckList from "./DeckList";
import './HomeScreen.css'

export default function HomeScreen() {

    const loggedIn = useSelector((state) => state.auth.token);

    return <div >
        {loggedIn ? <DeckList /> : <div>You're not logged in. </div>
        }

    </div>
}
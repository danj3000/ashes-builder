import DeckListItem from "./DeckListItem";
import { useGetPubDecksQuery } from "./services/ashesLive"

export default function DeckList() {
    const { data: pubDecks, isLoading } = useGetPubDecksQuery()

    if (isLoading) {
        return <div>Loading</div>;
    }

    if (!pubDecks) {
        return <div>No posts</div>;
    }
    return (
        <div>
            <h2>this is the deck list (can't you tell?)</h2>
            {
                pubDecks.results.map(d => <DeckListItem key={d.id} deck={d} />)
            }
        </div>
    )
}

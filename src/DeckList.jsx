import DeckListItem from "./DeckListItem";
import { useGetMyDecksQuery } from "./services/ashesLive"

export default function DeckList() {
    const { data: decks, isLoading } = useGetMyDecksQuery()
    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <div>
            {decks
                ? decks.results.slice(0, 10).map(d => <DeckListItem key={d.id} deck={d} />)
                : <div>No posts</div>
            }
        </div>
    )
}

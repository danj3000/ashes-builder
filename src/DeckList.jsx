import DeckListItem from "./DeckListItem";
import { useGetMyDecksQuery } from "./services/ashteki"

export default function DeckList() {
    const { data, isLoading } = useGetMyDecksQuery()
    if (isLoading) {
        return <div>Loading</div>;
    }

    return (
        <div>
            {data?.decks.length > 0
                ? data.decks.slice(0, 10).map(d => <DeckListItem key={d.id} deck={d} />)
                : <div>No decks to list</div>
            }
        </div>
    )
}

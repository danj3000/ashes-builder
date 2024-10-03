import { useSelector } from "react-redux";
import CardFilter from "./CardFilter";
import CardList from "./CardList";
import DeckHeader from "./DeckHeader";
import ZoomCard from "./ZoomCard";

function Builder() {
    let buildMode = useSelector((state) => state.viewer.buildMode);
    let zoomCards = useSelector((state) => state.viewer.zoomCards);
    if (!Array.isArray(zoomCards)) {
        zoomCards = [zoomCards];
    }

    return (
        <div>
            {/* <div >
            {error ? (
              <>Oh no, there was an error</>
            ) : isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                <h3>{Object.values(data.cards).map(c => '.')}</h3>
              </>
            ) : null}
          </div> */}
            {buildMode && <DeckHeader />}
            {
                zoomCards.length > 0 && (
                    <ZoomCard cards={zoomCards} />
                )
            }
            <>
                <CardFilter />
                <CardList />
            </>
        </div>
    )
}

export default Builder;
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
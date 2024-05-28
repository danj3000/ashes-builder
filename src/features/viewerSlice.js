import { createSlice } from '@reduxjs/toolkit'
import allCards from '../data/all-cards.json';
import catSpill from '../data/catspill.json';

const initialState = {
  selectedCard: null,
  allCards: loadCards(),
  catSpill: catSpill
};
function loadCards() {
  return allCards.results
    .map(c => Object.assign({ partial: catSpill.partial.includes(c.stub) }, c))
    .sort((a, b) => a.type < b.type ? -1 : 1);
}

export const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    zoomCard: (state, action) => {
      state.selectedCard = action.payload
    },
    clearZoom: (state) => {
      state.selectedCard = null
    }
  },
})

// Action creators are generated for each case reducer function
export const { zoomCard, clearZoom } = viewerSlice.actions

export default viewerSlice.reducer
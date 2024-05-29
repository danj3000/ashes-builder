import { createSlice } from '@reduxjs/toolkit'
import allCards from '../data/all-cards.json';
import catSpill from '../data/catspill.json';

const initialState = {
  zoomCards: [],
  allCards: loadCards(),
  catSpill: catSpill
};

function loadCards() {
  const results = allCards.results
    .map(c => Object.assign({
      banned: catSpill.banned.includes(c.stub),
      partial: catSpill.partial.includes(c.stub)
    },
      c))
    .sort((a, b) => a.type < b.type ? -1 : 1);

  results.forEach(c => {
    if (c.conjurations) {
      c.linkedCards = allCards.results.filter(ac => c.conjurations.some(c => c.stub === ac.stub))
    }
  })
  return results;
}
export const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    zoomCard: (state, action) => {
      state.zoomCards = Array.isArray(action.payload) ? action.payload : [action.payload];
    },
    clearZoom: (state) => {
      state.zoomCards = []
    }
  },
})

// Action creators are generated for each case reducer function
export const { zoomCard, clearZoom } = viewerSlice.actions

export default viewerSlice.reducer
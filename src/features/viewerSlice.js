import { createSlice } from '@reduxjs/toolkit'
import allCards from '../data/all-cards.json';
import catSpill from '../data/catspill.json';

const initialState = {
  zoomCards: [],
  allCards: loadCards(),
  catSpill: catSpill,
  buildMode: true,
  selection: []
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
      c.linkedCards = getConjurations(c)
    }
  })
  return results;
}

function getConjurations(c) {
  return allCards.results.filter(ac => c.conjurations.some(c => c.stub === ac.stub))
}

export const viewerSlice = createSlice({
  name: 'viewer',
  initialState,
  reducers: {
    zoomCard: (state, action) => {
      state.zoomIndex = 0;

      if (Array.isArray(action.payload)) {
        state.zoomCards = action.payload
      } else {
        const toAdd = [action.payload];
        if (action.payload.conjurations) {
          toAdd.push(...getConjurations(action.payload))
        }
        state.zoomCards = toAdd;
      }
    },
    clearZoom: (state) => {
      state.zoomCards = [];
      state.zoomIndex = 0;

    },
    setZoomIndex: (state, action) => {
      state.zoomIndex = action.payload;
    },
    selectCard: (state, action) => {
      const existing = state.selection.find(s => s.stub === action.payload.stub)
      if (existing) {
        if (existing.count < 3) {
          existing.count++;
        }
      } else {
        state.selection.push({ stub: action.payload.stub, count: 1 });
      }
    },
    reduceCard: (state, action) => {
      const existing = state.selection.find(s => s.stub === action.payload.stub)
      if (existing) {
        if (existing.count === 1) {
          const index = state.selection.indexOf(existing);
          state.selection.splice(index, 1);
        } else {
          existing.count--;
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { zoomCard, clearZoom, setZoomIndex, selectCard, reduceCard } = viewerSlice.actions

export default viewerSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  catSpill: true,
  gridView: false,
  deckCards: false,
  magicFilter: []
};

export const cardFilterSlice = createSlice({
  name: 'cardFilter',
  initialState,
  reducers: {
    toggleCatSpill: (state) => {
      state.catSpill = !state.catSpill
    },
    toggleGridView: (state) => {
      state.gridView = !state.gridView
    },
    toggleMagicFilter: (state, action) => {
      const value = action.payload;
      if (state.magicFilter.includes(value)) {
        state.magicFilter.splice(state.magicFilter.indexOf(value), 1);
      } else {
        state.magicFilter.push(value);
      }
    },
    toggleDeckCards: (state) => {
      state.deckCards = !state.deckCards
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleCatSpill, toggleGridView, toggleMagicFilter, toggleDeckCards } = cardFilterSlice.actions

export default cardFilterSlice.reducer
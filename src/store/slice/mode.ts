import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    value: 'light',
  },
  reducers: {
    changeMode: (state, value) => {
      state.value = value.payload;
      document.documentElement.classList.remove('theme-dark', 'theme-light');
      document.documentElement.classList.add(`theme-${value.payload}`);
    },
  },
});

export const { changeMode } = modeSlice.actions;

export default modeSlice.reducer;


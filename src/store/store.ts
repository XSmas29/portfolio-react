import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slice/mode';

export default configureStore({
  reducer: {
    mode: modeReducer,
  },
});
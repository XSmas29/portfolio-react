import { configureStore } from '@reduxjs/toolkit';
import modeReducer from './slice/mode';
import sidebarReducer from './slice/sidebar';

export default configureStore({
  reducer: {
    mode: modeReducer,
    sidebar: sidebarReducer,
  },
});
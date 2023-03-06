import { configureStore } from "@reduxjs/toolkit";
import gamesreducer from "./games/gameslice";
export const store = configureStore({
  reducer: {
    games: gamesreducer,
  },
});

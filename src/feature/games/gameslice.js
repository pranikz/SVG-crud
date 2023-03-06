import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// redux thunk middleware
export const fetchALlGamesAPI = createAsyncThunk("games/getAPI", async () => {
  const apiResponse = await axios.get("http://localhost:4000/games");
  return apiResponse.data;
});

export const addNewGameAPI = createAsyncThunk(
  "games/addGameAPI",
  async (payload) => {
    const apiResponse = await axios.post(
      "http://localhost:4000/games",
      payload
    );
    return apiResponse.data;
  }
);
const defaultState = { gameData: [], loading: "idle" };
const gameslice = createSlice({
  name: "game",
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchALlGamesAPI.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(fetchALlGamesAPI.fulfilled, (state, action) => {
      state.loading = "idle";
      state.gameData = action.payload;
    });
    builder.addCase(addNewGameAPI.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(addNewGameAPI.fulfilled, (state, action) => {
      state.loading = "idle";
      state.gameData.unshift(action.payload);
    });
  },
});

export const { allGamesLoading, allGamesLoaded } = gameslice.actions;
export const getAllGames = (state) => state.games.gameData;
export const getLoading = (state) => state.games.loading;
export default gameslice.reducer;

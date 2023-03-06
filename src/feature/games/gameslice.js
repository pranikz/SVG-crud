import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// redux thunk middleware
export const fetchALlGamesAPI = createAsyncThunk("games/getAPI", async () => {
  const apiResponse = await axios.get(
    "https://json-server-ft1b.onrender.com/games"
  );
  return apiResponse.data;
});

export const addNewGameAPI = createAsyncThunk(
  "games/addGameAPI",
  async (payload) => {
    const apiResponse = await axios.post(
      "https://json-server-ft1b.onrender.com/games",
      payload
    );
    return apiResponse.data;
  }
);

export const updateGameAPI = createAsyncThunk(
  "games/updateAPI",
  async (payload) => {
    const apiResponse = await axios.put(
      `https://json-server-ft1b.onrender.com/games/${payload.id}`,
      payload
    );
    return apiResponse.data;
  }
);
export const deleteGameAPI = createAsyncThunk("games/deleteAPI", async (id) => {
  const apiResponse = await axios.delete(
    `https://json-server-ft1b.onrender.com/games/${id}`
  );
  return id;
});

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
    builder.addCase(updateGameAPI.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(updateGameAPI.fulfilled, (state, action) => {
      state.loading = "idle";
      state.gameData.filter((_) => _.id !== action.payload.id);
      state.gameData.unshift(action.payload);
    });
    builder.addCase(deleteGameAPI.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(deleteGameAPI.fulfilled, (state, action) => {
      state.loading = "idle";
      state.gameData.filter((_) => _.id !== action.payload);
    });
  },
});

export const { allGamesLoading, allGamesLoaded } = gameslice.actions;
export const getAllGames = (state) => state.games.gameData;
export const getLoading = (state) => state.games.loading;
export const getGameById = (id) => {
  return (state) => state.games.gameData.filter((_) => _.id === id)[0];
};
export default gameslice.reducer;

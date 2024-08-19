import { createSlice } from "@reduxjs/toolkit";
import { playlists } from "../../data/data";

const playlistSlice = createSlice({
  name: "playlist",
  initialState: playlists,
  reducers: {},
});

export const playlistReducer = playlistSlice.reducer;
export const {} = playlistSlice.actions;

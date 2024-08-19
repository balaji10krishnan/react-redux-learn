import { createSlice } from "@reduxjs/toolkit";
import { playlists } from "../../data/data";

const playlistDetailSlice = createSlice({
  name: "playlistDetail",
  initialState: playlists[0].courses,
  reducers: {
    setPlaylistDetail: (state, action) => action.payload,
  },
});

export const playlistDetailReducer = playlistDetailSlice.reducer;
export const { setPlaylistDetail } = playlistDetailSlice.actions;

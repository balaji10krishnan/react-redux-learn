import { configureStore } from "@reduxjs/toolkit";
import { courseReducer } from "./slice/courseSlice";
import { courseDetailReducer } from "./slice/courseDetailSlice";
import { playlists } from "../data/data";
import { playlistReducer } from "./slice/playlistSlice";
import { playlistDetailReducer } from "./slice/playlistDetailSlice";

const store = configureStore({
  reducer: {
    courses: courseReducer,
    courseDetail: courseDetailReducer,
    playlists: playlistReducer,
    playlistDetail: playlistDetailReducer,
  },
});

export default store;

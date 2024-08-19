import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../data/data";

const courseSlice = createSlice({
  name: "course",
  initialState: courses,
  reducers: {},
});
export const courseReducer = courseSlice.reducer;

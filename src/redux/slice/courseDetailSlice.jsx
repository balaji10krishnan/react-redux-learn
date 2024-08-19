import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../../data/data";

const courseDetailSlice = createSlice({
  name: "courseDetail",
  initialState: courses[0],
  reducers: {
    setCourseDetail: (state, action) => action.payload,
  },
});

export const courseDetailReducer = courseDetailSlice.reducer;
export const { setCourseDetail } = courseDetailSlice.actions;

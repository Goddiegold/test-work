import { configureStore } from "@reduxjs/toolkit";
import {meetingReducer} from "./meeting";

export const store = configureStore({
  reducer: meetingReducer,
});

export default store;

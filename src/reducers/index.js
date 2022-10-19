import { combineReducers } from "redux";
import songsReducer from "./songsReducer";

const allReducers = combineReducers({
	songs: songsReducer,
});

export default allReducers;

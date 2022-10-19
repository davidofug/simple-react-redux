import { combineReducers } from "redux";
import songsReducer from "./songsReducer";
import cartReducer from "./cartReducer";

const allReducers = combineReducers({
	songs: songsReducer,
	items: cartReducer,
});

export default allReducers;

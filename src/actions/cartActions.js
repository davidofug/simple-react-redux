import { ADD_SONG_TO_CART, REMOVE_FROM_CART } from "../actions/types";

export const addSongToCart = (song) => {
	return {
		type: ADD_SONG_TO_CART,
		payload: song,
	};
};
export const removeItem = (index) => {
	return {
		type: REMOVE_FROM_CART,
		payload: index,
	};
};

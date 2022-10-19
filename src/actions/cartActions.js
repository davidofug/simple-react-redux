import { ADD_SONG_TO_CART } from "../actions/types";

export const addSongToCart = (song) => {
	return {
		type: ADD_SONG_TO_CART,
		payload: song,
	};
};

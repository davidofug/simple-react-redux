import {
	ADD_SONG,
	LOAD_USERS,
	ADD_SONG_TO_CART,
	DELETE_SONG,
	EDIT_SONG,
	UPDATE_SONG,
	CANCEL_EDIT,
} from "./types";

export const addSong = (song) => {
	return {
		type: ADD_SONG,
		payload: song,
	};
};

export const loadUsers = (users) => {
	return {
		type: LOAD_USERS,
		payload: users,
	};
};

export const addSongToCart = (song) => {
	return {
		type: ADD_SONG_TO_CART,
		payload: song,
	};
};
export const removeSong = (index) => {
	return {
		type: DELETE_SONG,
		payload: index,
	};
};

export const editSong = (index) => {
	return {
		type: EDIT_SONG,
		payload: index,
	};
};

export const updateSong = (title, artist, cost, index) => {
	return {
		type: UPDATE_SONG,
		title,
		artist,
		cost,
		index,
	};
};

export const cancelEdit = (index) => {
	return {
		type: CANCEL_EDIT,
		index,
	};
};

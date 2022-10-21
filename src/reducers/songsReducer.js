import {
	ADD_SONG,
	FETCH_USERS,
	DELETE_SONG,
	EDIT_SONG,
	UPDATE_SONG,
	CANCEL_EDIT,
} from "../actions/types";

const initialState = {
	songs: [
		{
			title: "Amazing Grace",
			artist: "Hillsong",
			cost: 10.0,
			editing: false,
		},
		{
			title: "No longer slave",
			artist: "Bethel Music",
			cost: 10.0,
			editing: false,
		},
	],
	users: [],
};

export default function songsReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_SONG:
			return {
				songs: [action.payload, ...state.songs],
			};
		case FETCH_USERS:
			return {
				songs: [...state.songs],
				users: [...state.users, ...action.payload],
			};
		case DELETE_SONG:
			return {
				songs: state.songs.filter((s, i) => i !== action.payload),
			};
		case EDIT_SONG:
			return {
				songs: state.songs.map((song, i) =>
					i === action.payload
						? { ...song, editing: true }
						: { ...song, editing: false }
				),
			};
		case UPDATE_SONG:
			return {
				songs: state.songs.map((song, i) =>
					i === action.index
						? {
								...song,
								title: action.title,
								artist: action.artist,
								cost: action.cost,
								editing: false,
						  }
						: song
				),
			};
		case CANCEL_EDIT:
			return {
				songs: state.songs.map((song, i) =>
					i === action.index ? { ...song, editing: false } : song
				),
			};
		default:
			return state;
	}
}

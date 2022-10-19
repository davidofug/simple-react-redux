import { ADD_SONG_TO_CART } from "../actions/types";

const initialState = {
	items: [],
};

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_SONG_TO_CART:
			return {
				items: [action.payload, ...state.items],
			};
		default:
			return state;
	}
}

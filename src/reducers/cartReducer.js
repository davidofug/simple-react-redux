import { ADD_SONG_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {
	items: [],
};

export default function cartReducer(state = initialState, action) {
	switch (action.type) {
		case ADD_SONG_TO_CART:
			return {
				items: [action.payload, ...state.items],
			};
		case REMOVE_FROM_CART:
			return {
				items: state.items.filter(
					(item, index) => index !== action.payload
				),
			};
		default:
			return state;
	}
}

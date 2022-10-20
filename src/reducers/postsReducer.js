const initialState = {
	users: [],
	fetch: false,
};

fetch("https://jsonplaceholder.typicode.com/users")
	.then((response) => response.json())
	.then((result) => console.log(result));

export default function usersReducer(state = initialState, action) {
	switch (action.type) {
		case LOAD_USERS:
			return {
				isLoaded: action.payload,
			};
		default:
			return state;
	}
}

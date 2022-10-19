import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
// Components
import SongList from "./components/SongList";
const store = createStore(allReducers);
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<h1>Songs(with the help of Redux)</h1>
				<SongList />
			</div>
		</Provider>
	);
}
export default App;

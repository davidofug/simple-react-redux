import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import allReducers from "./reducers";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// Components
import Cart from "./components/Cart";
import SongList from "./components/SongList";
const store = createStore(allReducers);
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<nav>
						<ul>
							<li>
								<Link to="/">Songs</Link>
							</li>
							<li>
								<Link to="/cart">Cart</Link>
							</li>
						</ul>
					</nav>
					<Routes>
						<Route path="/" element={<SongList />} />
						<Route path="/cart" element={<Cart />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}
export default App;

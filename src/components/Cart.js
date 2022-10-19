import React, { Component } from "react";
import { connect } from "react-redux";
class Cart extends Component {
	render() {
		const { items } = this.props;
		if (items?.length > 0) {
			return (
				<div>
					<h1>My Cart</h1>
					<ul>
						{items.map((item, index) => (
							<li key={index.toString()}>
								{item.title} - {item.artist} ${item.cost}
							</li>
						))}
					</ul>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	...state.items,
});

export default connect(mapStateToProps, {})(Cart);

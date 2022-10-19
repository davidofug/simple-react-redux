import React, { Component } from "react";
import { connect } from "react-redux";
import { removeItem } from "../actions/cartActions";
class Cart extends Component {
	constructor(props) {
		super(props);
		this.remove = this.remove.bind(this);
	}
	remove(index) {
		this.props.removeItem(index);
	}
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
								<button onClick={() => this.remove(index)}>
									{" "}
									-{" "}
								</button>
							</li>
						))}
						<b>Total</b> $
						{items.reduce(
							(accumulator, item) => accumulator + item.cost,
							0
						)}
					</ul>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	...state.items,
});

export default connect(mapStateToProps, { removeItem })(Cart);

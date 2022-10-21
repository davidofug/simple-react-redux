import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
	render() {
		const { users } = this.props;
		if (users?.length > 0) {
			return (
				<div>
					<h1>Users from JSON Placeholder API</h1>
					<ul>
						{users.map((user, index) => (
							<li key={index.toString()}> {user.name}</li>
						))}
					</ul>
				</div>
			);
		}
	}
}

const mapStateToProps = (state) => ({
	...state.users,
});

export default connect(mapStateToProps, {})(Users);

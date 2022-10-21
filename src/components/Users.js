import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
	render() {
		console.log(this.props);
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
		return <h1>Waiting for Users</h1>;
	}
}

const mapStateToProps = (state) => ({
	...state.users,
});

export default connect(mapStateToProps, {})(Users);

import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
	addSong,
	removeSong,
	editSong,
	updateSong,
	cancelEdit,
} from "../actions/songActions";
import { addSongToCart } from "../actions/cartActions";
class SongList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			artist: "",
			cost: 0.0,
			currentTitle: "",
			currentArtist: "",
			currentCost: 0.0,
		};

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.remove = this.remove.bind(this);
		this.edit = this.edit.bind(this);
		this.update = this.update.bind(this);
		this.cancel = this.cancel.bind(this);
		this.updatedVal = this.updatedVal.bind(this);
	}

	onSubmit(e) {
		e.preventDefault();

		const addedSong = {
			title: this.state.title,
			artist: this.state.artist,
			cost: this.state.cost,
		};

		this.props.addSong(addedSong);
		this.setState({ title: "", artist: "", cost: 0.0 });
	}

	addToCart(i) {
		const song = this.props.songs[i];
		this.props.addSongToCart(song);
	}

	onChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	updatedVal(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	remove(i) {
		this.props.removeSong(i);
	}

	edit(i, title, artist, cost) {
		this.props.editSong(i);
		this.setState({
			currentTitle: title,
			currentArtist: artist,
			currentCost: cost,
		});
	}

	update(i) {
		this.props.updateSong(
			this.state.currentTitle,
			this.state.currentArtist,
			this.state.currentCost,
			i
		);
		this.setState({ currentTitle: "", currentArtist: "", currentCost: "" });
	}

	cancel(i) {
		this.props.cancelEdit(i);
	}

	render() {
		const { songs } = this.props;
		return (
			<>
				<h1>Available Songs to shop</h1>
				<ul>
					{songs.map((song, i) => {
						return (
							<Fragment key={song.title}>
								{!song.editing ? (
									<li>
										{song.title} - {song.artist} $
										{song.cost}
										<span>
											<button
												onClick={() =>
													this.addToCart(i)
												}>
												Add to Cart
											</button>
											<button
												onClick={() => this.remove(i)}>
												Delete
											</button>
											<button
												onClick={() =>
													this.edit(
														i,
														song.title,
														song.artist,
														song.cost
													)
												}>
												Edit
											</button>
										</span>
									</li>
								) : (
									<li>
										<form>
											<input
												type="text"
												name="currentTitle"
												value={this.state.currentTitle}
												onChange={this.updatedVal}
											/>
											<input
												type="text"
												name="currentArtist"
												value={this.state.currentArtist}
												onChange={this.updatedVal}
											/>
											<input
												type="text"
												name="currentCost"
												value={this.state.currentCost}
												onChange={this.updatedVal}
											/>
										</form>
										<span>
											<button
												onClick={() => this.cancel(i)}>
												Cancel
											</button>
											<button
												onClick={() => this.update(i)}>
												Update
											</button>
										</span>
									</li>
								)}
							</Fragment>
						);
					})}
					<form onSubmit={this.onSubmit}>
						<input
							type="text"
							name="title"
							onChange={this.onChange}
						/>
						<input
							type="text"
							name="artist"
							onChange={this.onChange}
						/>
						<input
							type="text"
							name="cost"
							onChange={this.onChange}
						/>
						<input type="submit" value="Add Song" />
					</form>
				</ul>
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	...state.songs,
});

export default connect(mapStateToProps, {
	addSong,
	addSongToCart,
	removeSong,
	editSong,
	updateSong,
	cancelEdit,
})(SongList);

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import ItemFeed from './ItemFeed';

class FeedList extends Component {

	state = { feedList: [] };


	componentWillMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(response => this.setState({ feedList: response.data }));
	}

	renderFeed() {
		return this.state.feedList.map(feed => 
			<ItemFeed key={feed.id} feed={feed} />
		);
	}

	render() {
		return (
			<ScrollView>
				{this.renderFeed()}
			</ScrollView>
		);
	}
}

export default FeedList;

import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { loadFeed } from '../actions';
import { Spinner } from './common';
import ItemFeed from './ItemFeed';

class FeedList extends Component {

	componentWillMount() {
		this.props.loadFeed();
		this.createDataSource(this.props);
	}
	
	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ feedList }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(feedList);
	}

	renderRow(feed) {
		return <ItemFeed feed={feed} clickable />;
	}

	render() {
		if (this.props.loading) {
			return <Spinner size='large' />;
		}
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}
}

const mapStateToProps = (state) => {
	const { feedList, loading } = state.feedList;
	
	return { feedList, loading };
};

export default connect(mapStateToProps, { loadFeed })(FeedList);

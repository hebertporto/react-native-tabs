import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, Text } from 'react-native';
import { CardSection, Card } from './common';
import { loadComments } from '../actions';

class PostDetail extends Component {

	componentWillMount() {
		this.props.loadComments(this.props.feed);
		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		this.createDataSource(nextProps);
	}

	createDataSource({ comments }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
		this.dataSource = ds.cloneWithRows(comments);
	}

	renderHeader() {
		const { feed } = this.props;
		return (
			<Card>
				<CardSection>
					<Text>
						{feed.title}
					</Text>
				</CardSection>
				<CardSection>
					<Text>
						{feed.body}
					</Text>
				</CardSection>
			</Card>
		);
	}

	renderRow(comment) {
		return (
			<CardSection>
				<Text> {comment.body} </Text>
			</CardSection>
		);
	}

	render() {
		return (
			<ListView
				enableEmptySections
				renderHeader={this.renderHeader.bind(this)}
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);
	}

}

const mapStateToProps = (state) => {
	const { comments } = state.postDetail;
	return {
		comments
	};
};

export default connect(mapStateToProps, { loadComments })(PostDetail);

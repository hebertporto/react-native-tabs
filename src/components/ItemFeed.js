import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

class ItemFeed extends Component {

	selectFeed() {
		Actions.feed_1_2({ feed: this.props.feed });
	}
	
	render() {
		const { feed } = this.props;

		return (
			<TouchableWithoutFeedback
				onPress={this.selectFeed.bind(this)}
			>
				<View>
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
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ItemFeed;

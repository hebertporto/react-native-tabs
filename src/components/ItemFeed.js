import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection, Card } from './common';

class ItemFeed extends Component {

	selectFeed() {
		Actions.feed_1_2({ feed: this.props.feed });
	}
	
	render() {
		const { feed } = this.props;
		console.log(feed.url);
		return (
			<TouchableWithoutFeedback
				onPress={this.props.clickable && this.selectFeed.bind(this)}
			>
				<View>
					<Card>
						<CardSection>
							<Text>
								{feed.title}
							</Text>
						</CardSection>
						<CardSection style={{ flexDirection: 'column' }}>
							<Text>
								{feed.body}
							</Text>
							<Image
								style={{ flex: 1, 
										width: undefined, 
										height: 400 
										}}
								source={{ uri: feed.url }}
							/>
						</CardSection>
					</Card>
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

export default ItemFeed;

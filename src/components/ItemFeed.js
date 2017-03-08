import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection, Card } from './common';

class ItemFeed extends Component {

	
	render() {
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
}

export default ItemFeed;

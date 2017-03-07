import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection, Card } from './common';

class ItemFeed extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Text>
						Header
					</Text>
				</CardSection>
				<CardSection>
					<Text>
						Body
					</Text>
				</CardSection>
			</Card>
		);
	}
}

export default ItemFeed;

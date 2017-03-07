import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ItemFeed from './components/ItemFeed';

const RouterComponent = () => {
	return (
		<Router sceneStyle={{ paddingTop: 65 }} >
			<Scene key="feed" component={ItemFeed} title="Feed" />
		</Router>
	);
};

export default RouterComponent;

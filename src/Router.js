import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import { Text, StyleSheet } from 'react-native';
import ItemFeed from './components/ItemFeed';
import FeedList from './components/FeedList';

class TabIcon extends React.Component {
    render() {
        return (
			<Text style={{ color: this.props.selected ? '#009688' : '#757575' }}>{this.props.title}</Text>
        );
    }
}

const RouterComponent = () => {
	return (
		<Router >
			<Scene key="tabbar" tabs >
					<Scene 
						key="feed_0" 
						icon={TabIcon} 
						component={FeedList} 
						title="Feed" 
						sceneStyle={styles.navbarSpace} 
					/>
					<Scene 
						key="feed_1" 
						icon={TabIcon} 
						component={ItemFeed} 
						feed={{ title: 'casos', body: 'oi' }} 
						title="Casos" 
						sceneStyle={styles.navbarSpace} 
					/>
					<Scene 
						key="feed_2" 
						icon={TabIcon} 
						component={ItemFeed} 
						feed={{ title: 'explorar', body: 'oi' }} 
						title="Explorar" 
						sceneStyle={styles.navbarSpace} 
					/>
					<Scene 
						key="feed_3" 
						icon={TabIcon} 
						component={ItemFeed}
						feed={{ title: 'Mais', body: 'oi' }} 
						title="Mais" 
						sceneStyle={styles.navbarSpace} 
					/>
			</Scene>
		</Router>
	);
};

const styles = StyleSheet.create({
	navbarSpace: {
		paddingTop: 65,
		paddingBottom: 45
	}

});

export default RouterComponent;

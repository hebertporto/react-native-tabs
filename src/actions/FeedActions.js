import axios from 'axios';
import { LOAD_FEED, LOAD_FEED_SUCCESS, LOAD_FEED_FAIL } from './types';

export const loadFeed = () => {
	return (dispatch) => {
		dispatch({ type: LOAD_FEED });

		axios.get('https://jsonplaceholder.typicode.com/photos')
			.then(responsePhotos => {
				axios.get('https://jsonplaceholder.typicode.com/posts')
					.then(responsePosts => {
						const feedPhotos = responsePhotos.data;
						for (let i = 0; i < feedPhotos.length; ++i) {
							feedPhotos[i].body = responsePosts.data[i % responsePosts.data.length].body;
						}
					dispatch({ type: LOAD_FEED_SUCCESS, payload: feedPhotos });
				}).catch(loadFailed(dispatch));
			}).catch(loadFailed(dispatch));	
	};
};

const loadFailed = (dispatch) => {
	dispatch({ type: LOAD_FEED_FAIL });
};

import axios from 'axios';
import { LOAD_FEED, LOAD_FEED_SUCCESS, LOAD_FEED_FAIL } from './types';

export const loadFeed = () => {
	return (dispatch) => {
		dispatch({ type: LOAD_FEED });

		axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(response => {
				dispatch({ type: LOAD_FEED_SUCCESS, payload: response.data });
			})
			.catch(() => {
				dispatch({ type: LOAD_FEED_FAIL });
			});
	};
};

import axios from 'axios';
import { LOAD_COMMENTS } from './types.js';

export const loadComments = (post) => {
	return (dispatch) => {
		axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
			.then(response => {
				dispatch({ type: LOAD_COMMENTS, payload: response.data });
			})
			.catch(error => {
				console.log(error);
			});
	};
};

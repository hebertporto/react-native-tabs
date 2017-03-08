import { LOAD_FEED, LOAD_FEED_SUCCESS, LOAD_FEED_FAIL } from '../actions/types';

const INITIAL_STATE = {
	feedList: [], 
	loading: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOAD_FEED: 
			return { ...state, loading: true };
		case LOAD_FEED_SUCCESS:
			return { ...state, loading: false, feedList: action.payload };
		case LOAD_FEED_FAIL:
			return { ...state, loading: false };
		default:
			return state;
	}
};

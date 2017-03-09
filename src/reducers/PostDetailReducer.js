import {
	LOAD_COMMENTS
} from '../actions/types';

const INITIAL_STATE = {
	comments: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case LOAD_COMMENTS: 
			return { ...state, comments: action.payload };
		default:
			return state;
	}
};

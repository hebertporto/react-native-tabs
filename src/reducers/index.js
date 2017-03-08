import { combineReducers } from 'redux';
import FeedListReducer from './FeedListReducer';

export default combineReducers({
	feedList: FeedListReducer
});

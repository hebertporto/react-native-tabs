import { combineReducers } from 'redux';
import FeedListReducer from './FeedListReducer';
import PostDetailReducer from './PostDetailReducer';

export default combineReducers({
	feedList: FeedListReducer,
	postDetail: PostDetailReducer
});

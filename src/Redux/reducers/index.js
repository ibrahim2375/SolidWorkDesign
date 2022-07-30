import { posts_reducer } from './postsReducer'
import { home_posts_reducer } from './homeReducer'
import { user_reducer } from './userReducer'
import { combineReducers } from 'redux'

export const allReducers = combineReducers({
    posts_reducer: posts_reducer,
    home_posts_reducer: home_posts_reducer,
    user_reducer: user_reducer,
})
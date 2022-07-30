import { ActionsType } from '../ActionsType'
const initialState = {
    posts: [],
    single_post: []
}
export const posts_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsType.GET_POSTS:
            return {
                ...state,
                posts: action.payload.posts
            }
        case ActionsType.GET_SINGLE_POST:
            return {
                ...state,
                single_post: action.payload.single_post
            }
        default:
            return state;
    }
}
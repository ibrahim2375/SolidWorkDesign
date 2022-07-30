import { ActionsType } from '../ActionsType'
const initialState = {
    home_posts: [],
}
export const home_posts_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsType.GET_HOME_POSTS:
            return {
                ...state,
                home_posts: action.payload.home_posts
            }
        default:
            return state;
    }
}
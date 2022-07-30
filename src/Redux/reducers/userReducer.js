import { ActionsType } from '../ActionsType'
const initialState = {
    current_user: [],
    user_state: false,
    user_posts: []
}
export const user_reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsType.GET_USER:
            return {
                ...state,
                user_state: action.payload.user_state,
                current_user: action.payload.current_user,
            }
        case ActionsType.GET_USER_POSTS:
            return {
                ...state,
                user_posts: action.payload.user_posts,
            }
        default:
            return state;
    }
}
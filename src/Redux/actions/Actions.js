import { ActionsType } from '../ActionsType'
export const get_user = (current_user, user_state) => ({
    type: ActionsType.GET_USER,
    payload: {
        user_state,
        current_user,
    }
})
export const get_user_posts = user_posts => ({
    type: ActionsType.GET_USER_POSTS,
    payload: {
        user_posts,
    }
})
export const get_Posts = posts => ({
    type: ActionsType.GET_POSTS,
    payload: {
        posts
    }
})
export const get_single_post = single_post => ({
    type: ActionsType.GET_SINGLE_POST,
    payload: {
        single_post
    }
})
export const home_posts = home_posts => ({
    type: ActionsType.GET_HOME_POSTS,
    payload: {
        home_posts,
    }
})
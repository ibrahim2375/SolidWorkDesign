import axios from 'axios'
import store from '../Redux/store'
import { home_posts } from '../Redux/actions/Actions'
export const getHomeData = async () => {
    await axios.get(process.env.REACT_APP_HOME_SECTIONS).then((res) => {
        store.dispatch(home_posts(res.data));
    })
}
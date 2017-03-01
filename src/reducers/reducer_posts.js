/**
 * Created by Binaria on 1.3.2017..
 */
import { FETCH_POSTS, FETCH_POST } from '../actions/index';
const INITIAL_STATE = { all: [], post: null};

export default function(state = INITIAL_STATE, action=null){
    switch(action.type) {
        case FETCH_POST:
            return { ...state, post: action.payload.data};
        case FETCH_POSTS:
            return { ...state, all: action.payload.data };
        default:
            return state;
    }
}
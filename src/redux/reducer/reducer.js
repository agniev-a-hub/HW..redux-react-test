import {ADD_TODO} from '../actionTypes/actionTypes';
import { REMOVE_TODO } from '../actionTypes/actionTypes';

const defaultState = {
    // default state of the app, declared for the reduser
    // once dispatch of action happens, payload: of the action (object) will be putted in the [] as an {}
    posts: [
        // {id:666, header:'123', content:'1123'}
    ]
}



const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_TODO: {
            console.log('ADD_TODO reducer rule worked;')
            return {
                ...state, posts: [...state.posts, action.payload]
            }
        }
        case REMOVE_TODO: {
            console.log('REMOVE_TODO reducer rule worked;')
            console.log('state post id: ', state.posts.id)
            console.log('supposed to show up: ', state.posts.filter(a => a.id !== state.posts.id))

            return {
                //it's the base for remove todo selector, which will do that by ID
                // ...state, posts
                //plug
                ...state, posts: state.posts.filter(post => post.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default reducer;
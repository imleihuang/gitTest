import { UPDATE_GREETING } from '../actions/actions';
import { createStore, combineReducers} from 'redux';

function greetingReducer(oldState = 'World', action) {
    switch(action.type) {
        case UPDATE_GREETING:
            return action.payload;
        default:
            return oldState;
    }
}

const store = createStore(combineReducers(
    {
        greeting: greetingReducer
    }
));
export default store;
import { combineReducers } from 'redux';

//import reducer
import { reducer as AuthenticationReducer } from './AuthenticationRedux'

// export reducers
const rootReducer = combineReducers({
    authentication: AuthenticationReducer,
});

export default rootReducer;

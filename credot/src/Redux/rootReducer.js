import { combineReducers } from 'redux';

//import reducer
import { reducer as AuthenticationReducer } from './AuthenticationRedux'
import { reducer as RequestLoanReducer } from './RequestLoanRedux'

// export reducers
const rootReducer = combineReducers({
    authentication: AuthenticationReducer,
    requestLoan: RequestLoanReducer,
});

export default rootReducer;

import {applyMiddleware, combineReducers, compose, createStore} from "redux"
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    dialogsPage:  dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers( applyMiddleware(thunkMiddleware)))

//let store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store
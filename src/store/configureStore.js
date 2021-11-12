import {createStore,combineReducers, applyMiddleware,compose} from 'redux'
import blogReducer from '../reducers/blogs';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const store = createStore(
        combineReducers({
            blogs:blogReducer,
            auth:authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
}

export default configureStore;


import { createStore, combineReducers, applyMiddleware } from "redux"; 
import noteReducer from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    noteReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));


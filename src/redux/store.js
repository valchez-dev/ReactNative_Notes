import { createStore, combineReducers } from "redux"; 
import taskReducer from "./reducers";

const rootReducer = combineReducers({
    taskReducer
});

export const store = createStore(rootReducer);


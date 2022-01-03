import { combineReducers } from "redux";

import { ActionsExampleType, exampleReducer } from "./modules/example";
import { ActionsLoggedDataType, loggedDataReducer } from "./modules/loggedData";

export type StoreAction = ActionsExampleType | ActionsLoggedDataType;

export const Reducers = combineReducers({ exampleReducer, loggedDataReducer });

export type RootState = ReturnType<typeof Reducers>;

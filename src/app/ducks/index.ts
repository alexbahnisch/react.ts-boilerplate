"use strict";
import {Action, combineReducers, createStore, Reducer, Store} from "redux"


declare global {
  interface Window {
    redux: Store
  }
}

interface State {
  default: object
}

const rootReducer: Reducer<State, Action> = combineReducers<State, Action>({
  default: (state: object = {}, action: Action) => (state)
});

export const store: Store = createStore(rootReducer);

if (process.env.NODE_ENV !== "production") {
  window.redux = store
}

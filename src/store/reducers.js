import { combineReducers } from '@reduxjs/toolkit';

export function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    ...injectedReducers,
    // other non-injected reducers can go here...
  });

  return rootReducer;
}

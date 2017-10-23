import { combineReducers } from 'redux';

import uiState from './ui-state.reducer';
import appState from './app-state.reducer';
import configuration from './config.reducer';

const reducers = combineReducers({
  configuration,
  uiState,
  appState
});

export default reducers;

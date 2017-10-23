import {
  LOAD_ANTS_LIST,
  SET_ANTS_LIST
} from '../actions/types';

const appState = (state = {}, action) => {

  switch(action.type){
    case LOAD_ANTS_LIST:
      return { ...state };
    case SET_ANTS_LIST:
      let { ants } = action;
      let antsList = state.antsList.concat(ants);
      return {...state, antsList};
    default:
      return { ...state} ;
  }
}

export default appState;

import {
  DATA_LOADING,
  SET_VIDEOS_NEXT_PAGE,
  INIT_ANTS_STATS
} from '../actions/types';

const uiState = (state = {}, action) => {
  switch(action.type){
    case DATA_LOADING:
      return { ...state, isDataLoading: action.isDataLoading };
    case INIT_ANTS_STATS:
      let { antsStats } = state;
      antsStats = action.antsList.reduce(
        (acc, ant) => {
          acc[ant.id] = {
            status: 'Wating',
            result: null
          };
          return acc;
        }, antsStats
      )
      return { ...state, antsStats };
    default:
      return { ...state };
  }
}

export default uiState;

export const DATA_LOADING = 'DATA_LOADING';
export const INIT_ANTS_STATS = 'INIT_ANTS_STATS';
export const UPDATE_ANT_STATS = 'UPDATE_ANT_STATS';

export const dataLoading = (isDataLoading = false) => {
  return {
    type: DATA_LOADING,
    isDataLoading
  }
}

export const initAntsStatsAction = (antsList) => {
  return {
    type: INIT_ANTS_STATS,
    antsList
  }
}

export const updateAntStatsAction = (antId, antStat) => {
  return {
    type: UPDATE_ANT_STATS,
    antId,
    antStat
  }
}

export const DATA_LOADING = 'DATA_LOADING';
export const INIT_ANTS_STATS = 'INIT_ANTS_STATS';

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

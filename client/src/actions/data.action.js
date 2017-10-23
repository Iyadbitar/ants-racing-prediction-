import HttpService from '../services/http.service';
import { initAntsStatsAction } from './ui.action';

const httpService = new HttpService();

export const LOAD_ANTS_LIST = 'LOAD_ANTS_LIST'
export const SET_ANTS_LIST = 'SET_ANTS_LIST';

function hash(str){
    var hash = 0;
    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        hash = char + (hash << 6) + (hash << 16) - hash;
    }
    return Math.abs(hash);
}

export function loadAntsListAction() {
  return {
    type: LOAD_ANTS_LIST,
    promiseFactory: (dispatch, getState) => {
      const { configuration } = getState();
      let query = {
        query: '{ants{name,length,color,weight}}'
      };
      return () => httpService.get(configuration.apiUrl, query)
      .then(
        response => {
          // add unique id for each ant based on name hash
          response.data.ants.forEach(
            (ant) => {
              ant.id = hash(ant.name);
              return ant;
            }
          )
          dispatch(setAntsListAction(response.data.ants));
          dispatch(initAntsStatsAction(response.data.ants));
        }
      )
    }
  }
}

export function setAntsListAction(antsList) {
  return {
    type: SET_ANTS_LIST,
    ants: antsList
  }
}

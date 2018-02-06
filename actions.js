import { FETCHING_PEOPLE, FETCHING_PEOPLE_SUCCESS, FETCHING_PEOPLE_FAILURE } from './constants';

function getPeople() {
  return {
    type: FETCHING_PEOPLE
  }
}

function getPeopleSuccess(data) {
  return {
    type: FETCHING_PEOPLE_SUCCESS,
    data
  }
}

function getPeopleFailure() {
  return {
    type: FETCHING_PEOPLE_FAILURE
  }
}

export function fetchPeopleFromAPI() {
  return (dispatch) => {
    dispatch(getPeople())
    fetch('https://swapi.co/api/people/')
      .then(data => data.json())
      .then(json => {
        dispatch(getPeopleSuccess(json.results))
      })
      .catch(err => dispatch(getPeopleFailure(err)))
  }
}
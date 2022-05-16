import {put, all, select, takeLatest} from 'redux-saga/effects';

function* filter() {
  const state = yield select();
  let filteredUnits = state.units;

  function filterCost(resourceName) {
    const resource = resourceName.toLowerCase();
    return filteredUnits.filter((unit) => {
      // check the initialState SliderValue === 0 || null || undefined
      if (
        state[resource].value[0] === 0 &&
        (unit.cost === null || unit.cost[resource] === undefined)
      ) {
        return true;
      } else {
        return (
          unit.cost &&
          unit.cost[resourceName] >= state[resource].value[0] &&
          unit.cost[resourceName] <= state[resource].value[1]
        );
      }
    });
  }

  if (state.age !== 'All') {
    filteredUnits = filteredUnits.filter((unit) => unit.age === state.age);
  }
  if (state.wood.checked) {
    filteredUnits = filterCost('Wood');
  }
  if (state.food.checked) {
    filteredUnits = filterCost('Food');
  }
  if (state.gold.checked) {
    filteredUnits = filterCost('Gold');
  }
  yield put({type: 'SET_FILTERED', payload: filteredUnits});
}

//Worker Saga
function* ageFilter(action) {
  yield put({type: 'AGE', payload: action.payload});
  yield put({type: 'FILTER'});
}

function* costFilter(action) {
  yield put({type: 'COST', payload: action.payload});
  yield put({type: 'FILTER'});
}

export default function* rootSaga() {
  yield all([
    yield takeLatest('AGE_FILTER', ageFilter),
    yield takeLatest('COST_FILTER', costFilter),
    yield takeLatest('FILTER', filter),
  ]);
}

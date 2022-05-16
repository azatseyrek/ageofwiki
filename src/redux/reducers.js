// Data
import mockData from '../mock/age-of-empires-units.json';

const initialState = {
  units: mockData.units,
  filterOutput: null,
  age: 'All',
  wood: {checked: true, value: [0, 200]},
  gold: {checked: true, value: [0, 200]},
  food: {checked: true, value: [0, 200]},
};

export default function actionFilter(state = initialState, action) {
  switch (action.type) {
    // Age Filter
    case 'AGE': {
      return {
        ...state,
        age: action.payload,
      };
    }

    // Cost Filter
    // checking the checkboxes and rangeSlider value
    case 'COST': {
      if (action.payload.checked !== undefined) {
        return {
          ...state,
          [action.payload.costName]: {
            checked: action.payload.checked,
            value: state[action.payload.costName].value,
          },
        };
      } else if (action.payload.value) {
        return {
          ...state,
          [action.payload.costName]: {
            checked: state[action.payload.costName].checked,
            value: action.payload.value,
          },
        };
      }
      break;
    }
    // Payload cames from sagas. The case is filtering for filteredOtput
    case 'SET_FILTERED':
      return {
        ...state,
        filterOutput: action.payload,
      };

    default:
      return state;
  }
}

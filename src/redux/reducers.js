import mockData from '../mock/age-of-empires-units.json';

const initialState = {
  units: mockData.units,
  filteredResult: null,
  age: 'All',
  wood: {checked: false, value: [0, 200]},
  food: {checked: false, value: [0, 200]},
  gold: {checked: false, value: [0, 200]},
};

export default function actionFilter(state = initialState, action) {
  switch (action.type) {
    case 'AGE': {
      return {
        ...state,
        age: action.payload,
      };
    }
    case 'CHECK_STATUS': {
      // if resource checkbox checked
      if (typeof action.payload.checked === 'boolean') {
        return {
          ...state,
          [action.payload.resourceName]: {
            checked: action.payload.checked,
            value: state[action.payload.resourceName].value,
          },
        };
      }
      break;
    }
    case 'SLIDER_VALUE': {
      if (action.payload.value) {
        return {
          ...state,
          [action.payload.resourceName]: {
            value: action.payload.value,
            checked: true,
          },
        };
      }
      break;
    }
    case 'SET_FILTERED':
      return {
        ...state,
        filterOutput: action.payload,
      };

    default:
      return state;
  }
}

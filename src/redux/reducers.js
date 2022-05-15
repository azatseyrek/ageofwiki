import mockData from '../mock/age-of-empires-units.json';

const initialState = {
  units: mockData.units,
  filteredResult: [],
  age: 'All',
  wood: {checked: true, value: [0, 200]},
  food: {checked: true, value: [0, 200]},
  gold: {checked: true, value: [0, 200]},
};

export default function actionFilter(state = initialState, action) {
  switch (action.type) {
    case 'AGE': {
      return {
        ...state,
        age: action.payload,
      };
    }
    case 'RESOURCE_COST': {
      // if resource checkbox checked
      if (action.payload.checked !== undefined) {
        return {
          ...state,
          [action.payload.resourceName]: {
            checked: action.payload.checked,
            value: state[action.payload.resourceName].value,
          },
        };
      } else if (action.payload.value) {
        return {
          ...state,
          [action.payload.resourceName]: {
            checked: state[action.payload.resourceName].checked,
            value: action.payload.value,
          },
        };
      }
      break;
    }

    default:
      return state;
  }
}

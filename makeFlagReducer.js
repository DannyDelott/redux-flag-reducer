export default function makeFlagReducer(onValue, offValue, onActionTypes = [], offActionTypes = [], initialState) {
  const common = intersection(onActionTypes, offActionTypes);

  if (common.length > 0) {
    throw new Error(`Invalid FlagReducer: Identical on and off actions found: ${JSON.stringify(common)}`);
  }

  const defaultState = initialState || offValue;

  return (state = defaultState, action = {}) => {
    if (onActionTypes.includes(action.type)) {
      return onValue;
    } else if (offActionTypes.includes(action.type)) {
      return offValue;
    }
    return state;
  };
}

function intersection(arr1, arr2) {
  return  arr2.reduce((common, element) => {
    if (arr1.includes(element)) {
      common.push(element);
    }
    return common;
  }, []);
}

import intersection from 'lodash/intersection';

export default function makeFlagReducer(onValue = true, offValue = false, onActionTypes = [], offActionTypes = [], defaultState) {
  const common = intersection(onActionTypes, offActionTypes);
  if (common.length > 0) {
    throw new Error(`Invalid FlagReducer: Identical on and off actions found: ${JSON.stringify(common)}`);
  }

  const initialState = defaultState || offValue;

  return (state = initialState, action = {}) => {
    if (!action.type) {
      return state;
    } else if (onActionTypes.includes(action.type)) {
      return onValue;
    } else if (offActionTypes.includes(action.type)) {
      return offValue;
    }
  };
}

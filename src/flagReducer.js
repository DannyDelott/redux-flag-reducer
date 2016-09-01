import intersection from 'lodash/intersection';

export default function makeFlagReducer(name = 'flag', onActionTypes = [], offActionTypes = [], defaultState = false) {
  const common = intersection(onActionTypes, offActionTypes);
  if (common.length > 0) {
    throw new Error(`Invalid FlagReducer ${name}: Duplicate actions found: ${JSON.stringify(common)}`);
  }
  return (state = defaultState, action = {}) => {
    if (!action.type) {
      return state;
    }
    if (onActionTypes.indexOf(action.type) > -1) {
      return true;
    }
    if (offActionTypes.indexOf(action.type) > -1) {
      return false;
    }
  };
}

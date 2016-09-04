# redux-flag-reducer
Create a reducer that returns true or false, "on" or "off", "loaded" or "loading", etc.

# Background

redux-flag-reducer makes it convenient to implement flags as reducers in your redux state tree.
This can be handy for tracking all kinds of things from toggle-based UIs to the loading/loaded
state of an external resource.

# API

## `makeFlagReducer`

**Synopsis:**

```javascript
makeFlagReducer(onValue, offValue, onActionTypes, offActionTypes, [initialState])
```

**Description:**

Returns a reducer function that can be used with redux's `combineReducers` method. It returns
the `onValue` when it is called with action types from the `onActionTypes` list, and the `offValue`
when it is called with action types from the `offActionTypes` list.

**Options:**

Argument | Type | Description
--- | --- | ---
`onValue` | `String|Boolean` | The value to return when the action should turn the state "on".
`offValue` | `String|Boolean` | The value to return when the action should turn the state "off".
`onActionTypes` | `Array<String>` | The action types on which to return the onValue.
`offActionTypes` | `Array<String>` | The action types on which to return the offValue.
`[initialState]` | `String|boolean` | The initial state for the flag reducer. Default: `offValue`

<br />

**Examples:**

```javascript
const isChecked = makeFlagReducer(true, false, ['CHECK_BOX'], ['UNCHECK_BOX', ['RESET_FORM'])
```
Create a reducer to track a checkbox value.

<br />

```javascript
const fetchStatus = makeFlagReducer('LOADING', 'LOADED', ['FETCH_DATA'], ['FETCH_DATA_COMPLETE'], 'IDLE')
```
Create a reducer to track the load status of an external resource.

# Usage with `combineReducers`

The reducer made by `makeFlagReducer` can be put directly into the reducers object passed to redux's
`combineReducers` method.

```javascript

import { combineReducers } from 'redux'
import makeFlagReducer from 'redux-flag-reducer'

export const termsOfService = combineReducers({
  isChecked: makeFlagReducer(true, false, ['CHECK_BOX'], ['UNCHECK_BOX', ['RESET_FORM']),
  status: makeFlagReducer('ENABLED', 'DISABLED', ['TOS_SCROLL_COMPLETE'], ['RESET_FORM'], 'DISABLED')
})
```

import constants from '../constants/actionTypes'

var initialState = {
  sample: []
}

export default (state = initialState, action) => {

  var updated = Object.assign({}, state)

  switch(action.type) {

    case constants.ACTION_NAME:
      updated['sample'] = action.sample
      return updated

    default:
      return state
    }
}
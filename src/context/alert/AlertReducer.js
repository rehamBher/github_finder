import { REMOVE_ALERT, SET_ALERT } from "../types"

export default function AlertReducer(state, action) {
  switch (action.type) {
    case SET_ALERT: {
      return {
        ...state,
        alert: action.data,
      }
    }
    case REMOVE_ALERT: {
      return {
        ...state,
        alert: null,
      }
    }
    default:
      return state
  }
}

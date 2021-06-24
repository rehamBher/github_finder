import React, { useReducer } from "react"
import AlertReducer from "./AlertReducer"
import AlertContext from "./alertContext"
import { REMOVE_ALERT, SET_ALERT } from "../types"
const AlertState = (props) => {
  let initialState = {
    alert: null,
  }

  const [state, dispatch] = useReducer(AlertReducer, initialState)
  //alert
  const setAlert = (msg, type) => {
    dispatch({ type: SET_ALERT, data: { msg, type } })
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT })
    }, 2000)
  }

  return <AlertContext.Provider value={{ alert: state.alert, setAlert }}>{props.children}</AlertContext.Provider>
}
export default AlertState

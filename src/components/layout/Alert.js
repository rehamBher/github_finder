import React, { useContext } from "react"
import AlertContext from "../../context/alert/alertContext"

export default function Alert() {
  let { alert } = useContext(AlertContext)
  return <>{alert !== null && <div className={`alert alert-${alert.type}`}>{alert.msg}</div>}</>
}

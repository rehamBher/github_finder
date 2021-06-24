import React, { useState, useContext } from "react"
import AlertContext from "../../context/alert/alertContext"
import GithubContext from "../../context/github/githubContext"

function Search() {
  let [text, setText] = useState("")
  let { searchUsers, clearItem, users } = useContext(GithubContext)
  let { alert, setAlert } = useContext(AlertContext)
  const onSubmit = (e) => {
    e.preventDefault()
    if (text === "") {
      setAlert("please try again", "info")
    } else {
      searchUsers(text)
      setText("")
    }
  }
  const onChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} />
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {users.length > 0 && (
        <button className="btn btn-light btn-block" onClick={clearItem}>
          Clear
        </button>
      )}
    </div>
  )
}

export default Search

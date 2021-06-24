import React, { useContext } from "react"
import GithubContext from "../../context/github/githubContext"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"
function Users() {
  const { loading, users } = useContext(GithubContext)
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => {
          return <UserItem user={user} key={user.id} />
        })}
      </div>
    )
  }
}

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
}

export default Users

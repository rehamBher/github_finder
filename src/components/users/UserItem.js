import React from "react"
import { Link } from "react-router-dom"
export default function UserItem({ user: { html_url, login, avatar_url } }) {
  return (
    <div className="card text-center">
      <img src={avatar_url} alt="" className="round-img" style={{ width: "60px" }} />
      <h3>{login}</h3>

      <div>
        <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  )
}

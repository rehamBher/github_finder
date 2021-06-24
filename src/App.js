import axios from "axios"
import React, { useState } from "react"
import { getUserInfo, getUserRepos, getUsers, searchUser } from "./api"
import Users from "./components/users/Users"
import Navbar from "./components/layout/Navbar"
import Search from "./components/users/Search"
import Alert from "./components/layout/Alert"
import { Switch, Route } from "react-router-dom"
import User from "./components/users/User"
import GithubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"
function App() {
  let [alert, setAlert] = useState(null)

  //alert
  const showAlert = (msg, type) => {
    setAlert({ alert: { msg, type } })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (
    <GithubState>
      <AlertState>
        <Navbar />
        <div className="container">
          <Alert />

          <Switch>
            <Route
              path="/"
              exact
              render={(props) => (
                <>
                  <Search />
                  <Users />
                </>
              )}
            />
            <Route
              path="/user/:login"
              exact
              render={(props) => (
                <>
                  <User {...props} />
                </>
              )}
            />
          </Switch>
        </div>
      </AlertState>
    </GithubState>
  )
}

export default App

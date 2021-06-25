import axios from "axios"
import React, { useState } from "react"
import { getUserInfo, getUserRepos, getUsers, searchUser } from "./api"
import Navbar from "./components/layout/Navbar"
import Alert from "./components/layout/Alert"
import { Switch, Route } from "react-router-dom"
import User from "./components/users/User"
import GithubState from "./context/github/GithubState"
import AlertState from "./context/alert/AlertState"
import Home from "./components/pages/Home"
import PageNotFound from "./components/pages/PageNotFound"
function App() {
  return (
    <GithubState>
      <AlertState>
        <Navbar />
        <div className="container">
          <Alert />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/user/:login"
              exact
              render={(props) => (
                <>
                  <User {...props} />
                </>
              )}
            />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </AlertState>
    </GithubState>
  )
}

export default App

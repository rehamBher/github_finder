import GithubContext from "./githubContext"
import React, { useReducer } from "react"
import GithubReducer from "./GithubReducer"
import axios from "axios"
import { getUserInfo, getUserRepos, getUsers, searchUser } from "../../api"

import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types"
const GithubState = (props) => {
  let initialState = {
    users: [],
    user: {},
    loading: false,
    repos: [],
  }
  const [state, dispatch] = useReducer(GithubReducer, initialState)
  const searchUsers = async (text) => {
    setLoading()
    let res = await axios.get(searchUser(text))
    dispatch({
      type: SEARCH_USERS,
      data: res.data.items,
    })
  }

  // fetch user info
  const getUser = async (username) => {
    setLoading()
    let res = await axios.get(getUserInfo(username))
    dispatch({
      type: GET_USER,
      data: res.data,
    })
  }

  const getRepos = async (username) => {
    setLoading()
    let res = await axios.get(getUserRepos(username))

    dispatch({
      type: GET_REPOS,
      data: res.data,
    })
  }

  //clear
  const clearItem = () => {
    dispatch({
      type: CLEAR_USERS,
    })
  }
  let setLoading = () => dispatch({ type: SET_LOADING })
  return <GithubContext.Provider value={{ users: state.users, user: state.user, loading: state.loading, repos: state.repos, searchUsers, getUser, clearItem, getRepos }}>{props.children}</GithubContext.Provider>
}

export default GithubState

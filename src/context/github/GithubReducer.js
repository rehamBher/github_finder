import React from "react"
import { CLEAR_USERS, GET_REPOS, GET_USER, SEARCH_USERS, SET_LOADING } from "../types"

export default function GithubReducer(state, action) {
  switch (action.type) {
    case SEARCH_USERS: {
      return {
        ...state,
        loading: false,
        users: action.data,
      }
    }
    case GET_USER: {
      return {
        ...state,
        loading: false,
        user: action.data,
      }
    }
    case CLEAR_USERS: {
      return {
        ...state,
        users: [],
      }
    }
    case GET_REPOS: {
      return {
        ...state,
        loading: false,
        repos: action.data,
      }
    }
    case SET_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }

    default:
      return state
  }
}

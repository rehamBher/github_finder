const base_url = `https://api.github.com`
let client_id
let client_secreet
if (process.env.NODE_ENV !== "production") {
  client_id = process.env.REACT_APP_GITHUB_CLIENT_ID
  client_secreet = process.env.REACT_APP_GITHUB_CLIENT_SECRET
} else {
  client_id = process.env.GITHUB_CLIENT_ID
  client_secreet = process.env.GITHUB_CLIENT_SECRET
}
const popular_users = `client_id=${client_id}&client_secret=${client_secreet}`

export const getUsers = () => `${base_url}/users?${popular_users}`

export const searchUser = (text) => `${base_url}/search/users?q=${text}&${popular_users}`

export const getUserInfo = (username) => `${base_url}/users/${username}?${popular_users}`

export const getUserRepos = (username) => `${base_url}/users/${username}/repos?per_page=5&sort=created:asc&${popular_users}`

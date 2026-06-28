
require('dotenv').config()
const express = require('express');
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {     //listening at home route
    res.send('Hello World!')
})

const gitHubData = {
  "login": "rahul040106",
  "id": 159941492,
  "node_id": "U_kgDOCYiDdA",
  "avatar_url": "https://avatars.githubusercontent.com/u/159941492?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/rahul040106",
  "html_url": "https://github.com/rahul040106",
  "followers_url": "https://api.github.com/users/rahul040106/followers",
  "following_url": "https://api.github.com/users/rahul040106/following{/other_user}",
  "gists_url": "https://api.github.com/users/rahul040106/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/rahul040106/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/rahul040106/subscriptions",
  "organizations_url": "https://api.github.com/users/rahul040106/orgs",
  "repos_url": "https://api.github.com/users/rahul040106/repos",
  "events_url": "https://api.github.com/users/rahul040106/events{/privacy}",
  "received_events_url": "https://api.github.com/users/rahul040106/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 8,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-02-13T17:28:14Z",
  "updated_at": "2026-06-19T17:45:19Z"
}


app.get("/github", (req, res)=>{
    res.json(gitHubData)
})
app.get('/twitter', (req, res)=>{
    res.send("Rahul Patle")
})

app.get('/login', (req,res)=>{
    res.send('<h1>please login at chai and code</h1>')
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
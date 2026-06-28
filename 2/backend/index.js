import express from "express";
const app = express()
app.use(express.static('dist'))  // for this we have to stop get at "/"

// app.get('/', (req, res) => {
//     res.send("Server Started")
// })

const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res)=>{
    const jokes = [
  {
    id: 1,
    title: "Programmer Joke",
    content: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "JavaScript Joke",
    content: "Why did the JavaScript developer wear glasses? Because he couldn't C#."
  },
  {
    id: 3,
    title: "Debugging Joke",
    content: "Debugging is like being the detective in a crime movie where you are also the murderer."
  },
  {
    id: 4,
    title: "Computer Joke",
    content: "Why was the computer cold? Because it left its Windows open."
  },
  {
    id: 5,
    title: "Backend Joke",
    content: "I told my server a joke... It returned 404: Joke Not Found."
  }
]

res.send(jokes)

})
app.listen(port, ()=>{
    console.log("Started")
})
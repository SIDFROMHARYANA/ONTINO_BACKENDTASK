const express = require('express')

const bodyParser = require('body-parser')

const db = require('./queries')

const app = express()

app.use(bodyParser.urlencoded({extended: true}))

const PORT = 3000

app.get('/',(req,res) => {
     res.json({
        info : 'Node.js Express & Postgres CRUD API'
     })
})

 app.get('/longest_duration_movies',db.getMovies)
 app.post('/new-movie', db.createMovie)
 app.get('/top-rated-movies', db.getratings)
 app.get('/genre-movies-with-subtotals', db.getVotes)
 app.post('/update-runtime-minutes ', db.updateruntimeminutes)




 

 app.listen(PORT , () => {
     console.log("App is listening on port 3000")
})
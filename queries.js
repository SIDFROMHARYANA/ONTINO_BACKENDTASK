const Pool = require('pg').Pool

const pool = new Pool ({
      user : 'postgres',
      host : 'localhost',
      databse : 'postgres',
      password : 'jgj',
      port: 5432
    })
 
    const getMovies = (req,res) => {
        pool.query("SELECT * FROM movies ORDER BY runtimeMinutes DESC LIMIT 10", (err,results) =>
        {
           if(err)
         {
            throw err;
         }
          res.status(200).json(results.rows)

        })
    }

    const createMovie = (req,res) =>
    {
        const{tconst, titleType, primaryTitle, runtimeMinutes, genres} = req.body;
    
        pool.query('INSERT INTO movies(tconst, titleType, primaryTitle, runtimeMinutes, genres) VALUES($1,$2,$3,$4,$5) ',
         [tconst ,titleType, primaryTitle, runtimeMinutes, genres], (error,results) =>
         {
            if(error)
            {
                throw error;
            }
            res.status(201).json({
                msg:"success",
                data:(`${results.rows[0]}`),
            });
        });
    }

    const getratings = (req,res) => {
        pool.query("SELECT * FROM ratings WHERE averageRating >= 6", (err,results) =>
        {
           if(err)
         {
            throw err;
         }
          res.status(200).json(results.rows)

        })
    }

    
    const getVotes = (req,res) => {
        pool.query("genres_subtotal-numVotes.sql", (err,results) =>
        {
           if(err)
         {
            throw err;
         }
          res.status(200).json(results.rows)

        })
    }

    const updateruntimeminutes = (req,res) => {
        pool.query("incremented_runtime-minutes.sql", (err,results) =>
        {
           if(err)
         {
            throw err;
         }
          res.status(200).json(results.rows)

        })
    }



    



    module.exports = {
        getMovies,
        createMovie,
        getratings,
        getVotes,
        updateruntimeminutes
    }

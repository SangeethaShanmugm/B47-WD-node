CRUD Operations

C - Create => add/insert
=> insertOne / insertMany
R - Read - get
=> find/findOne
U - Update
=> updateOne / updateMany / replaceOne
D - Delete
=> deleteOne /deleteMany

// req => what we send to Server
// res => what we receive from Server

//mongodb://localhost
//mongodb://localhost:27017
//mongodb://0.0.0.0:27017

//Task
// /movies => all the movies ✅
// /movies?language=English => only english movies ✅
// /movies?rating=8 => only those rated movies ✅
// /movies?language=English&rating=8 => filter by language & rating ✅

// let filteredMovies = movies;
// if (language) {
// filteredMovies = movies.filter((mv) => mv.language == language);
// }
// if (rating) {
// filteredMovies = movies.filter((mv) => mv.rating == rating);
// }

//db.movies.findOne({id:"100"})
// const movie = movies.find((mv) => mv.id == id);

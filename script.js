let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }

}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie); //uses push function to add element to array of all movies.
    console.log("A new movie is added.");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    var numMovies = 0; //accumulator variable to track number of movies. 
    console.log("Printing all movies....")
    for(var i = 0; i < allMovies.length; i++) {
        console.log(allMovies[i].title + ", rating of " + allMovies[i].rating + ", haveWatched: " + allMovies[i].haveWatched);
        numMovies++; //increments for each movie object in the movies array. 
    }
    console.log("\nYou have " + numMovies + " movies in total");
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    console.log("Printing movie(s) that has a rating higher than " + rating);
    var numMatches = 0; //accumulator variable tracks how many movies with rating higher than passed in value, 'rating'.
    for(var i = 0; i < allMovies.length; i++) {
        if(allMovies[i].rating != undefined && allMovies[i].rating > rating) { // undefined pointer check and value check. 
            console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
            numMatches++; //only increases if object rating greater than passed in threshold. 
        } //else, loop continues until end of movie array. 
    }
    console.log("\nIn total, there are " + numMatches + " matches.");
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    console.log("Changing the status of the movie...");
    for(var i = 0; i < allMovies.length; i++) { // Iterates through allMovies array to fine title of movie to toggle. 
        if(allMovies[i].title == title) { // Finds title in allMovies array. 
            if(allMovies[i].haveWatched == true) { //checks current haveWatched status 
                allMovies[i].haveWatched = false; //changes to false if was true. 
            } else {
                allMovies[i].haveWatched = true; //changes to true if was false. 
            }
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);
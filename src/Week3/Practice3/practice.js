const movies = require("./movies.json");

//take the movies data and try to maneuver it

//slice last 10 - DONE
//splice out a few movies in the middle - DONE
//sort movies by their name/year/id - DONE
//filter movies by keywords, tags, storyline - DONE

var filtered = movies.filter((o,i)=>{
    return o.storyline.includes("adventure");
});
console.log("Filtered movies", filtered);

var sorted = movies.sort((a,b)=>{
    if (a.releaseDate > b.releaseDate) {
        return -1;
    } else if (a.releaseDate < b.releaseDate) {
        return 1;
    } else {
        return 0;
    }
});
// console.log("Sorted movies", sorted);

var spliced = movies.splice(50, 3);
// console.log("Spliced from middle", spliced);

var sliced = movies.slice(Math.max(movies.length - 10, -1))
// console.log("Sliced last 10", sliced);
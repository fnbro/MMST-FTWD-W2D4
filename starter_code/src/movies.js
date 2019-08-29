/* eslint no-restricted-globals: 'off' */

// Iteration 1: All rates average - Get the average of all rates with 2 decimals 
function ratesAverage(array) {
    let sumOfRatings = array.reduce((accu, element)=>
    {
        let rating = element.rate || 0;
        return accu+parseFloat(rating);
    }, 0)
    return Math.round((sumOfRatings/array.length)*100)/100
} 
// Iteration 2: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(array) {
    let dramaMovies = array.filter(movie => {
        return movie.genre.includes('Drama');
    })
    if(!dramaMovies.length) return 0;
    return ratesAverage(dramaMovies);
}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function orderByDuration(movies) {
    return movies.sort((a,b) => {
        if(a.duration === b.duration) {
            return a.title > b.title;
        }
        return a.duration - b.duration;
    });
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct
function howManyMovies(movies) {
    return movies.filter(function(movie){
        return movie.genre.includes('Drama') && movie.director === 'Steven Spielberg';
    }).length
}

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {
    const onlyTitles = movies.map(function(element) {
        return element.title;
    });
    const sortedArray = onlyTitles.sort(function(a,b) {
        return a.localeCompare(b);
    }).slice(0, 20);
    return sortedArray;
}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes
function convertDurationStringToMinutes(string) {
    const hm = string.split('h');

    let durationInMinutes = 0;
    if(hm.length === 1) durationInMinutes = parseInt(hm[0]);
    else if(hm[1].length === 0){
        durationInMinutes = parseInt(hm[0])*60 || 0;
    }   
    else {
        const minutes = parseInt(hm[1].trim()); 
        const hours = parseInt(hm[0]);
        durationInMinutes = minutes + hours*60;
    }
    return durationInMinutes;
}
function turnHoursToMinutes(movies) {
    const transformedMovies = movies.map(movie => {
        const durationInMinutes = convertDurationStringToMinutes(movie.duration);

        const tranformedMovie = {
            title: movie.title,
            year: movie.year,
            director: movie.director,
            duration: durationInMinutes,
            genre: movie.genre,
            rate: movie.rate
        }
        return tranformedMovie;
    });
    return transformedMovies;
}
// BONUS Iteration: Best yearly rate average - Best yearly rate average

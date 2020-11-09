

// Admin Script
var d = new Date();
var movies = JSON.parse(localStorage.getItem('MovieList'));
if (movies === null){
    movies = [];
}
// example {id:1592304983049, title: 'Deadpool', year: 2015}
const addMovie = (ev) => {
    ev.preventDefault(); //to stop the form submitting
    let movie = {
        titleID: Date.now(),
        titleImage: document.getElementById('titleImage').files[0].name,
        title: document.getElementById('title').value,
        description: document.getElementById('description').value,
        genre: document.getElementById('genre').value,
        language: document.getElementById('language').value,
        rating: document.getElementById('rating').value,
        dateAdded: d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " " + d.getFullYear() + "/" + d.getMonth() + "/" + d.getDate() 

    }
    movies.push(movie);
    document.forms[0].reset(); // to clear the form for the next entries
    document.querySelector('form').reset();

    // //for display purposes only
    // console.warn('added', {movies});
    // let pre = document.querySelector('#msg pre');
    // pre.textContent = '\n' + JSON.stringify(movies, '\t', 7);

    //saving to localStorage
    localStorage.setItem('MovieList', JSON.stringify(movies));
}
document.addEventListener('DOMContentLoaded', () => {
    
    document.getElementById('btn').addEventListener('click', addMovie);
}

);

function signOut(){
    localStorage.removeItem("currentUser");
}
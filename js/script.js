const url = "https://ghibliapi.herokuapp.com/films";
let movies;

let getMovies = () => {
    //here goes the fetch

    fetch(url)
    .then(response => response.json()) //här gör vi om vår respons till objekt
    .then(data => {
        //här stoppar vi in resultatet i vår movies-variabel
        movies = data;
    })
    .catch((error) => { //Fånga ev. fel
        console.log('Error: ', error);
    });
};

getMovies();

document.getElementById('search-button').addEventListener('click', function() {

    //for every movie in the Movies-list - match the title with the input
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i].title, movies[i].director);
    }

});
const url = "https://ghibliapi.herokuapp.com/films";
let movies;

let renderMovies = () => {

    for (let i = 0; i < movies.length; i++) {

        let li = document.createElement("li");

        let liText = document.createTextNode(movies[i].title + ', ' + movies[i].director);

        li.appendChild(liText);

        document.getElementById('movie-list').appendChild(li);
    }

}

let getMovies = () => {
    //here goes the fetch

    fetch(url)
    .then(response => response.json()) //här gör vi om vår respons till objekt
    .then(data => {
        //här stoppar vi in resultatet i vår movies-variabel
        movies = data;
        //kalla på vår funktion där vi renderar våra filmer ut i vyn
        renderMovies();
    })
    .catch((error) => { //Fånga ev. fel
        console.log('Error: ', error);
    });
};

getMovies();
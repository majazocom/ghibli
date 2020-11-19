const url = "https://ghibliapi.herokuapp.com/films";
let movies;

let renderMovies = () => {

    for (let i = 0; i < movies.length; i++) {

        let article = document.createElement("article"); //create new element

        article.classList.add('movie'); //add classname to element

        let articleText = document.createTextNode(movies[i].title + ', ' + movies[i].director);

        article.appendChild(articleText); //add text inside of the new element

        document.getElementById('movie-list').appendChild(article);
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
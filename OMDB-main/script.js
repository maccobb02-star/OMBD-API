

async function getMovies() {
    try {
        // 1. Get the search term from the search box, 
        //          send a request to the ombd (USING YOUR API KEY)
        //          decode the response as JSON
        const searchTerm = document.getElementById("search").value;
        const url = ("http://www.omdbapi.com/?apikey=a6613c7&s=" + searchTerm);
        const response = await fetch(url);
        const json = await response.json();



        const movieHolder = document.getElementById("movieHolder");

        for (movie of json.Search) {
            const card = document.createElement("div");
            card.className = "card";

            // Create an image element
            //      point it to the image from this movie       
            const img = document.createElement("img");
            img.src = movie.Poster;
            img.width = 100;


            // Create a CONTAINER div to hold the title and year.
            // Give the CONTAINER div the style of container
            const container = document.createElement("div");
            container.className = "container";
            let titleHeader = document.createElement("h3");
            titleHeader.textContent = movie.Title + ": " + movie.Year;
            container.appendChild(titleHeader);

            // Add the CONTAINER to the CARD
            // Add all the elements to the movieHolder element
            card.appendChild(img);
            card.appendChild(container);
            movieHolder.appendChild(card);
        }


    }
    catch (error) {
        console.log(error)
    }
}
let searchForm = document.getElementById("searchForm");
let city = document.getElementById("cityInput");

let api_key_weathermap = prompt("Please enter your api key.")



searchForm.addEventListener("submit", (event) => {
    // prevents the form from sending the data to a url, and refreshing the page
    event.preventDefault();

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${api_key_weathermap}&units=imperial`
        )
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            document.getElementById("city").textContent = data.name;
            document.getElementById("temp").textContent =
            "Currently: " + data.main.temp + " Degrees";
            document.getElementById("feels").textContent =
            "Feels like " + data.main.feels_like + " Degrees";
        })
        .catch((err) => {
            console.log(err.message);
        })
    });


    fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=LvM2qVpX9reYwFDOIIceoI0Dx0oqDSgH&s=city`
    )
    .then(async (data) => {
        let parsedData = await data.json();
        let img = document.getElementById("gif");
        img.src = parsedData.data.images.original.url;
        img.alt = parsedData.data.title;
    })
    .catch((err) => {
        console.log(err);
    });
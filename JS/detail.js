const detailsBeer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);
const url = "https://api.punkapi.com/v2/beers/" + id;


async function getBeers() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        detailsBeer.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            if (i === 10) {
                break;
            }

           detailsBeer.innerHTML += `<div class="details"><h1>${data[i].name}</h1>
                                                      <image src=${data[i].image_url}>
                                                      <p>${data[i].description}</p>
                                  </div>`;
        }
    } catch (error) {
        console.log("An error occurred");
        details.innerHTML = displayError("An error occurred when calling the API");
    }
}
getBeers();
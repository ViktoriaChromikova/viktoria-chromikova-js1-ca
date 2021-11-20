const url = "https://api.punkapi.com/´v2/beers";

const overView = document.querySelector(".overview");

async function getBeers() {
    try {
        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        overView.innerHTML = "";

        for (let i = 0; i < data.length; i++) {
            if (i === 10) {
                break;
            }

           overView.innerHTML += `<a href="details.html?id=${data[i].id}" class="result"><h1>${data[i].name}</h1>
                                                      <image src=${data[i].image_url}>
                                                      <p>${data[i].description}</p>
                                  </a>`;
        }
    } catch (error) {
        overView.innerHTML = displayError("Lost in a galaxy far far away");
    }
}
getBeers();
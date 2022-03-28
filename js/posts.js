// variable to hole the API search URL
const SEARCH_URL = "https://jsonplaceholder.typicode.com/albums/2/photos";
// DOM elements
const main = document.getElementById("main");
const counter = document.getElementById("counter");
// array told our data array
let imageArr = [];

retreiveImages(SEARCH_URL);
// asynchronous function to fetch our data
async function retreiveImages(url) {
  const response = await fetch(url);
  const data = await response.json();
  appendImages(data);
}

// function to dynamically append our HTML
// with the data retrieved from our API call
function appendImages(images) {
  main.innerHTML = ``;
  imageArr = images;
  // for each loop to go through the data in the imageArr
  imageArr.forEach((image, index) => {
    let { thumbnailUrl, url, title } = image;
    let imageDiv = document.createElement("div");
    imageDiv.classList.add("card");
    imageDiv.setAttribute("data-index", `${index}`);

    imageDiv.innerHTML = `
        <img class="thumb " src="${url}" alt="Image">
        <p class="title">${title}</p>
    `;
    main.appendChild(imageDiv);
  });
  counter.innerHTML = `<h2>${imageArr.length}</h2>`;
}

// function whcih grabs the card class
// and retrives it's index position
const mainEvent = (e) => {
  if (e.target !== main) {
    let card = e.target.closest(".card");
    let index = card.getAttribute("data-index");
    // add the fade-out class to apply the fade-out
    card.classList.add("fade-out");

    // function that fires off after 3s to remove the clicked image from the array
    setTimeout(() => {
      imageArr.splice(index, 1);
      appendImages(imageArr);
    }, 3000);
  }
};

main.addEventListener("click", mainEvent);

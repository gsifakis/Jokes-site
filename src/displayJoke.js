import { global } from "./const.js";
import { fetchJoke } from "./utils.js";
import { saveJoke } from "./localStorage.js";

async function displayJoke(e) {
    let data;
    if (e.target.classList.contains("dad")) {
        data = await fetchJoke(global.urls.dadPath);
    } else {
        data = await fetchJoke(global.urls.chuckPath);
    }

    const jokeDisplay = document.querySelector(".joke-display");

    // has to do this else every time display joke is called a new p would be added to the dom
    jokeDisplay.innerHTML = "";
    jokeDisplay.style = "display:flex";
    const jokep = document.createElement("p");

    if (e.target.classList.contains("dad")) {
        jokeDisplay.appendChild(jokep).innerHTML = data.joke;
    } else {
        jokeDisplay.appendChild(jokep).innerHTML = data.value;
    }

    const saveBtn = document.createElement("button");
    saveBtn.id = "save-btn";
    saveBtn.classList.add("btn");
    saveBtn.classList.add("btn-dark");
    saveBtn.innerHTML = "Add To Favourites";
    jokeDisplay.appendChild(saveBtn);

    saveBtn.addEventListener("click", saveJoke);
}

export { displayJoke };

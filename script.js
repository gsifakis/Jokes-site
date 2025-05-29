import { global } from "./src/const.js";

import { displayFavourites } from "./src/localStorage.js";

import { displayJoke } from "./src/displayJoke.js";

import { activePath, changeTheme, deleteJokeBtnClicked } from "./src/utils.js";

function initHomePage() {
    document.getElementById("btn-dad").addEventListener("click", displayJoke);
    document.getElementById("btn-chuck").addEventListener("click", displayJoke);
}

function initFavourites() {
    displayFavourites();
    deleteJokeBtnClicked();
}

function init() {
    switch (global.pathName) {
        case "/":
        case "/index.html":
            initHomePage();
            break;
        case "/favourites.html":
            initFavourites();
            // localStorage.clear();
            break;
    }
    activePath();
    document.getElementById("themeBtn").addEventListener("click", changeTheme);
}

window.addEventListener("DOMContentLoaded", init);

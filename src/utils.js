import { global } from "./const.js";
import { removeJokeFromStorage } from "./localStorage.js";

async function fetchJoke(path) {
    let config = {
        headers: {
            Accept: "application/json",
        },
    };

    try {
        const response = await fetch(path, config);
        if (response.ok) {
            const resData = await response.json();
            return resData;
        } else {
            if (response.status === 404) {
                throw new Error("404, Not found");
            } else {
                throw new Error(response.status, "Sth went wrong");
            }
        }
    } catch (error) {
        console.error("Fetch", error);
    }
}

function activePath() {
    const menuLinks = document.querySelectorAll(".menu-link");
    for (let link of menuLinks) {
        if (global.pathName === "/") {
            menuLinks[0].classList.add("link-active");
            break;
        }
        if (link.getAttribute("href") === global.pathName) {
            link.classList.add("link-active");
        }
    }
}

function changeTheme() {
    const icons = document.querySelectorAll("i");
    const body = document.querySelector("body");
    const btns = document.querySelectorAll(".btn");
    const menuLinks = document.querySelectorAll(".menu-link");
    const themeTitle = document.querySelector(".theme-title");

    for (let item of icons) {
        item.classList.toggle("light-text");
    }
    for (let item of menuLinks) {
        item.classList.toggle("light-text");
    }
    for (let button of btns) {
        button.classList.toggle("btn-dark");
    }

    if (icons[0].classList.contains("light-text")) {
        themeTitle.innerHTML = "Light";
    } else {
        themeTitle.innerHTML = "Dark";
    }

    body.classList.toggle("body-dark");
}

function deleteJokeBtnClicked() {
    const del = document.querySelectorAll(".delete-btn");
    del.forEach((btn) => {
        btn.addEventListener("click", removeJokeFromStorage);
    });
}

export { fetchJoke, activePath, changeTheme, deleteJokeBtnClicked };

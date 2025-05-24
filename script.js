const global = {
    urls: {
        chuckPath: "https://api.chucknorris.io/jokes/random",
        dadPath: "https://icanhazdadjoke.com/",
    },
};

async function fetchJoke(path) {
    let config = {
        headers: {
            Accept: "application/json",
        },
    };

    try {
        const response = await fetch(path, config);
        if (response.ok) {
            return (resData = await response.json());
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

async function displayJoke2(e) {
    let data;
    if (e.target.classList.contains("dad")) {
        data = await fetchJoke(global.urls.dadPath);
    } else {
        data = await fetchJoke(global.urls.chuckPath);
    }

    const jokedisplay = document.querySelector(".joke-display");

    // has to do this else every time display joke is called a new p would be added to the dom
    jokedisplay.innerHTML = "";
    const jokep = document.createElement("p");

    if (e.target.classList.contains("dad")) {
        jokedisplay.appendChild(jokep).innerHTML = data.joke;
    } else {
        jokedisplay.appendChild(jokep).innerHTML = data.value;
    }
}

function changeTheme() {
    const icons = document.querySelectorAll("i");
    const body = document.querySelector("body");
    const btns = document.querySelectorAll(".btn");
    const themeTitle = document.querySelector(".theme-title");

    for (item of icons) {
        item.classList.toggle("light-text");
        item.classList.add("transition");
    }
    for (button of btns) {
        button.classList.toggle("btn-dark");
        button.classList.add("transition");
    }

    if (icons[0].classList.contains("light-text")) {
        themeTitle.innerHTML = "Light";
    } else {
        themeTitle.innerHTML = "Dark";
    }

    body.classList.toggle("body-dark");
    body.classList.add("transition");
}

function init() {
    document.getElementById("themeBtn").addEventListener("click", changeTheme);
    document.getElementById("btn-dad").addEventListener("click", displayJoke2);
    document
        .getElementById("btn-chuck")
        .addEventListener("click", displayJoke2);
}

window.addEventListener("DOMContentLoaded", init);

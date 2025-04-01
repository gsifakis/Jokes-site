const icons = document.querySelectorAll("i");
const body = document.querySelector("body");
const btns = document.querySelectorAll(".btn");
const themeTitle = document.querySelector(".theme-title");
const jokedisplay = document.querySelector(".joke-display");
const jokep = document.createElement("p");

async function fetchDadJoke() {
    let config = {
        headers: {
            Accept: "application/json",
        },
    };

    await fetch("https://icanhazdadjoke.com/", config)
        .then((res) => res.json())
        .then((data) => (jokedisplay.appendChild(jokep).innerHTML = data.joke));
}

async function fetchChuckJoke() {
    await fetch("https://api.chucknorris.io/jokes/random")
        .then((res) => res.json())
        .then((data) => {
            jokedisplay.appendChild(jokep).innerHTML = data.value;
        });
}

// function displayJoke(e) {
//     console.log(e.target);

//     if (e.target.classList.contains(".dad")) {
//         jokedisplay.children[0].innerHTML = fetchDadJoke();
//     } else {
//         jokedisplay.children[0].innerHTML = fetchChuckJoke();
//     }
// }

document.getElementById("themeBtn").addEventListener("click", () => {
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
});

document.getElementById("btn-dad").addEventListener("click", fetchDadJoke);
document.getElementById("btn-chuck").addEventListener("click", fetchChuckJoke);

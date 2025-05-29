function saveJokeToStorage(index, joke) {
    localStorage.setItem(index, joke);
}

function removeJokeFromStorage(e) {
    localStorage.removeItem(e.target.parentElement.id);

    e.target.parentElement.style = "display:none";
}

function clearFavourites() {
    localStorage.clear();
}

function saveJoke(e) {
    const savedMessage = document.createElement("h3");
    savedMessage.classList.add("saved-message");
    savedMessage.innerHTML = "Added Joke To Favourites";

    e.target.parentElement.insertBefore(
        savedMessage,
        e.target.parentElement.lastChild
    );
    saveJokeToStorage(
        (Math.random() * 10000).toFixed(4),
        e.target.parentElement.firstChild.innerHTML
    );

    setTimeout(() => {
        e.target.parentElement.style = "display: none";
    }, 1200);
}

function displayFavourites() {
    const savedJokesContainer = document.getElementById("saved-jokes");
    const savedJokesBox = document.querySelector(".saved-jokes-box");

    if (localStorage.length === 0) {
        const noJokes = document.createElement("h2");
        noJokes.innerHTML = "You haven't saved any jokes yet";
        savedJokesBox.appendChild(noJokes);
        savedJokesContainer.style = "margin-bottom : 22rem";
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            const jokeBox = document.createElement("div");
            jokeBox.classList.add("joke-box");
            jokeBox.id = localStorage.key(i);

            const jokeP = document.createElement("p");
            jokeP.classList.add("joke-paragraph");

            const deleteBtn = document.createElement("i");
            deleteBtn.classList.add("fa-solid", "fa-x", "delete-btn");

            jokeP.innerHTML = localStorage.getItem(localStorage.key(i));
            jokeBox.appendChild(jokeP);
            jokeBox.appendChild(deleteBtn);
            savedJokesBox.appendChild(jokeBox);
        }
    }
}

export { saveJoke, clearFavourites, removeJokeFromStorage, displayFavourites };

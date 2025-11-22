document.getElementById("movie-list").addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }
});

let ul = document.getElementById("movie-list");
console.log("Parent of ul:", ul.parentNode);
console.log("First movie:", ul.firstElementChild.textContent);
console.log("Last movie:", ul.lastElementChild.textContent);
console.log("All children:", ul.children);

document.getElementById("clone-btn").addEventListener("click", function() {
    let firstItem = ul.querySelector("li");
    let copy = firstItem.cloneNode(true);
    ul.appendChild(copy);
});

localStorage.setItem("username", "Haroon");
let name = localStorage.getItem("username");
document.getElementById("welcome").textContent = "Welcome " + name;

let box = document.getElementById("box");
document.getElementById("toggle-box").addEventListener("click", function() {
    box.classList.toggle("active");
    box.classList.toggle("highlight");
    box.classList.toggle("hidden");
});

let input = document.getElementById("movie-input");
let addBtn = document.getElementById("add-btn");

function addMovie() {
    let movieName = input.value.trim();
    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }
    let template = `<li class="item">${movieName}</li>`;
    ul.insertAdjacentHTML("beforeend", template);
    input.value = "";
    input.focus();
}

addBtn.addEventListener("click", addMovie);
input.addEventListener("keydown", function(e) {
    if (e.key === "Enter") addMovie();
});


const toggle = document.getElementById("toggleTheme");
const body = document.body;

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
   });

window.onload = () => {
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark");
    }
};

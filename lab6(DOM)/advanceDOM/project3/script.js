let gallery = document.getElementById("gallery");
let lightbox = document.getElementById("lightbox");
let lightImage = document.getElementById("lightImage");

gallery.addEventListener("click", e => {
    if(e.target.tagName === "IMG"){
        lightImage.src = e.target.src;
        lightbox.style.display = "block";
    }
});
lightbox.addEventListener("click", () => {
    lightbox.style.display = "none";
});


/*Create a new <div> dynamically.
Add some text to it.
Append it to the body.*/
const newDiv = document.createElement("div");
newDiv.textContent = "This is my new Div";
document.body.appendChild(newDiv);

/*Modify CSS Using JavaScript
Change the color and font size of an element when a button is clicked.*/
document.getElementById("btn").addEventListener("click", function(){
    btn.style.color = "blue";
    btn.style.fontSize = "2rem";
});

/* DOM Traversal
Print all child elements of a specific container in the console.*/
let container = document.getElementById("container");
let children = container.children;
for (let i=0; i<children.length; i++){
    console.log(children[i]);
}

/*Replace and Remove Elements
 Replace one paragraph with another dynamically and remove a node after 3 seconds.*/
let para1 = document.getElementById("p1"); 
let newpara = document.createElement("p");
newpara.textContent = "This is the new paragraph replacing the original one.";
para1.replaceWith(newpara); 

let removepara = document.getElementById("p2"); 
setTimeout(function(){
    removepara.remove();
    console.log("p2 has been removed after 1 second.");
}, 1000);

/*Interactive To-Do List
 Add input and “Add” button. Add new list items dynamically using appendChild().*/
let input = document.getElementById("movie-input");
let addBtn = document.getElementById("add-btn");
let list = document.getElementById("movie-list");

addBtn.addEventListener("click", function() {
    let movieName = input.value.trim();
    if (movieName === "") {
        alert("Please enter a movie name!");
        return;
    }
    let newItem = document.createElement("li");
    newItem.textContent = movieName;
    newItem.classList.add("List-items");
    list.appendChild(newItem);
    input.value = "";
});




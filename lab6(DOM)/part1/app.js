// //DOM Manipulation
// //getElementById
// const title = document.getElementById('main-heading');
// console.log(title);

// //getElementsByClassName
// const listItems = document.getElementsByClassName('list-items');
// console.log(listItems);

// //getElementsByTagName
// const Items = document.getElementsByTagName('li');
// console.log(Items);

// //querySelector
// const container = document.querySelector('div');
// console.log(container);

// //querySelectorAll
// const constainer2 = document.querySelectorAll('div');
// console.log(constainer2);

/*Styling with the help of DOM
style using querySelector(only select 1st element)*/
const heading = document.querySelector("#main-heading");
heading.style.color = 'blue';

//style with querySelectorAll(select All match)
const container = document.querySelectorAll('div');
//loop for each list item & styling
container.forEach(item => {
    item.style.backgroundcolor = "light-gray";
    item.style.color = "darkgreen";
    item.style.fontWeight = "bold"; 
});
console.log(container);

//innerHTML
const h1 = document.getElementById("main-heading").innerHTML = "<b> New HTML Added! </b>";
console.log(h1);

//innertext
let text = document.getElementById("main-heading").innerText;
console.log(text);

//innerContent
let text1 = document.getElementById("main-heading").innerContent;
console.log(text1);

//setAttribute/getAttribute
let btn = document.getElementById("btn");
btn.setAttribute("title", "Click this button");
console.log(btn.getAttribute("id"));

//createElement() and createTextNode()
let newDiv = document.createElement("div");
let textNode = document.createTextNode("This is a new div!");
newDiv.appendChild(textNode);
document.body.appendChild(newDiv);
console.log(textNode);

//appendChlid()
let newpara = document.createElement("p");
newpara.textContent = "This is my added paragraph!";
document.getElementById("main-heading").appendChild(newpara);
console.log(newpara);

// parentNode / parentElement
let button = document.getElementById("btn");
console.log(button.parentNode);

//childNodes / children
let container3 = document.getElementById("main-heading");
console.log(container3.children);

//irstChild / lastChild
let first = container.firstChild;
let last = container.lastChild;
console.log(first,last);

// nextSibling / previousSibling
let para1 = document.querySelector("p");
console.log(para1.nextSibling);

// //classList
// let heading= document.getElementById("main-heading");
// heading.classList.add("highlight");
// heading.classList.toggle("hhhhhh");

//DOM Events (onclick, addEventListener())
document.getElementById("btn").addEventListener("click", function(){
    alert("Button clicked!");
});
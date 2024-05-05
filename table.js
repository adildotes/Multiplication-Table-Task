




// Concatenating multiplication table entries
let table = +prompt("Enter the number for the multiplication table");
let h3El = document.querySelector("h2");
h3El.innerHTML = "";
for (let i = 1; i <= 10; i++) {
    h3El.innerHTML += table + " x " + i + " = " + (table * i) + "<br>";
}

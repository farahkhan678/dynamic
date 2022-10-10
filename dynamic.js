let a = document.getElementById("jokeText");
let b = document.getElementById("spinner");
let c = document.getElementById("jokeBtn");
let options = {
    method: "GET"
};

function f() {
    b.classList.remove("d-none");
    a.classList.add("d-none");

    fetch("https://apis.ccbp.in/jokes/random", options)
        .then(function(res) {

            return res.json();
        })
        .then(function(jsondata) {
            let z = jsondata.value;

            b.classList.add("d-none");
            a.classList.remove("d-none");

            a.textContent = z;
            console.log(z);
        });
}
c.addEventListener("click", f);
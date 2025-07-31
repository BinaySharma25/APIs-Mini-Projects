let url = "https://catfact.ninja/fact";
let fact1 = document.querySelector(".cat-facts1");
let fact2 = document.querySelector(".cat-facts2");
const btn = document.getElementById("#btn");

async function getFacts() {
    try{
        let res = await fetch(url);   
        let data = await res.json();
        console.log(data.fact);
        fact1.innerText = data.fact;

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2.fact);
        fact2.innerText = data2.fact;
        

    } catch (e) {
        console.log("error - ", e);
    }
}

function call() {
    getFacts();
}

btn.addEventListener("click", call);
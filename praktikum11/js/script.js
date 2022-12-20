document.querySelectorAll("#option a").forEach((a) => {
    // jika di klik akan menjalankan sebuah function computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element hasil komputer dengan queryselector
    let pilihanKomputer = document.querySelector("#result");

    // mengisi pilihan komputer dengan array
    let choices = ["Rock", "Paper", "Scissors"]

    // pilihan komputer secara random
    pilihanKomputer.innerHTML = choices[Math.round(Math.random()*choices.length)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        alert("DRAW");
        setTimeout(() => alert("DRAW"), 300);
    }

    // jika pilihan user menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        alert("USER WIN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Rock"){
        alert("USER WIN");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        alert("USER WIN");
    }

    // jika pilihan komputer menang
    if(pilihanUser == "Rock" && pilihanKomputer == "Paper"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Paper" && pilihanKomputer == "Scissors"){
        alert("COMPUTER WIN");
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Rock"){
        alert("COMPUTER WIN")
    }
}
function los() {
    const span = document.getElementById("text");
    const card = document.getElementById("card");


    let Nahodnecislo = Math.floor(Math.random()* 11)

    let vyhraA = "Vyhra A"
    let vyhraB = "Vyhra B"
    let vyhraC = "Vyhra C"

    if (Nahodnecislo == 1)
    {
        document.getElementById("vyhra").innerText = vyhraC
    }
    else if (Nahodnecislo >1 && Nahodnecislo <= 3)
    {
        document.getElementById("vyhra").innerText = vyhraB
    }
    else
    {
        document.getElementById("vyhra").innerText = vyhraA
    }

    // Text vybledne
    span.style.opacity = 0;

    setTimeout(() => {
        span.innerText = "Losuji...";
        span.style.opacity = 1;
    }, 300);

    setTimeout(() => {
        span.style.opacity = 0;

        setTimeout(() => {
            span.innerText = "Losuj!";
            span.style.opacity = 1;

            card.classList.add("flipped")
        }, 300);
    }, 1800); // 300ms fade + 1500ms čekání
}

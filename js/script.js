//richiamiamo la sezione del main
const cardContainer = document.querySelector(".photo-cont");

//settiamo endpoint di API
const apiPics = 'https://lanciweb.github.io/demo/api/pictures/';

//richiamiamo il container dell'overlay
const overlay = document.querySelector(".box");




//generiamo le 6 immagini tramite chiamata ajax
axios.get(apiPics).then((response) => {
    //prendiamo i dati necessari
    const cardImg = response.data;
    // console.log(cardImg);
    
    //creiamo una variabile contenitore per le cards e overlay img
    let card = "";
    let over = "";

    //utilizziamo i dati per creare le cards
    cardImg.forEach(singleImg => {
        // console.log(singleImg);

        //per ogni pic/card aggiungiamo un pezzo alla nostra sezione
        card += `
            <div class="col-main" data-url="${singleImg.url}" data-title="${singleImg.title}">
                <img class="pics" src="${singleImg.url}" alt="${singleImg.title}">
                <aside class="data">${singleImg.date}</aside>
                <aside class="evento">${singleImg.title}</aside>
                <img src="img/pin.svg" alt="pin" id="pin">
            </div>`;
        });

        //definiamo output tramite stringa in HTML
        cardContainer.innerHTML = card;

        //richiamiamo tutte le card della pagina
    const allCards = document.querySelectorAll(".col-main");
    console.log(allCards);

    allCards.forEach(singleCard => {
        singleCard.addEventListener("click", () => {
            //prendiamo i dati necessari per l overlay direttamente dal DOM tramite attributo
            //(visto in documentazione)
            const imgUrl = singleCard.dataset.url;
            const titleImg = singleCard.dataset.title;

        //per ogni pic/card sull overlay aggiungiamo HTML in pagina
        over = `<img src="${imgUrl}" alt="${titleImg}" class="bigImg">
                <button class="btn">X</button>`;
            // console.log(over);

            //definiamo output tramite stringa in HTML
            overlay.innerHTML = over;

            //rimuoviamo la classe "d-none" cosi da far apparire il nostro overlay in pagina
            overlay.classList.remove("d-none");

            //pulsante per chiudere l'overlay
            //richiamiamo il bottone per la chiusura
            const bottone = document.querySelector(".btn");
            bottone.addEventListener("click", () => {
                overlay.classList.add("d-none");
            });
        });
    });
});



    
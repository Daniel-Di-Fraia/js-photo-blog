//richiamiamo la sezione del main
const cardContainer = document.querySelector(".photo-cont");

//settiamo endpoint di API
const apiPics = 'https://lanciweb.github.io/demo/api/pictures/';


//generiamo le 6 immagini tramite chiamata ajax
axios.get(apiPics).then((response) => {
    //prendiamo i dati necessari
    const cardImg = response.data;
    // console.log(cardImg);
    
    //creiamo una variabile contenitore per le cards
    let card = "";

    //utilizziamo i dati per creare le cards
    cardImg.forEach(singleImg => {
        console.log(singleImg);

        //per ogni pic/card aggiungiamo un pezzo alla nostra sezione
        card += `
            <div class="col-main">
                <img class="pics" src="${singleImg.url}" alt="${singleImg.title}">
                <aside>${singleImg.title}</aside>
            </div>`;
        });

        //definiamo output tramite stringa in HTML
        cardContainer.innerHTML = card;
});
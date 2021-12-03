function mostrarMenu() {
    let menu = document.getElementById("menu");

    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none";

    } else {
        menu.style.display = "flex";

    }
}



function cadastrarNewsletter() {
    let emaildigitado = document.getElementById("newsletter-email").value;
    console.log(emaildigitado);
}



function rendenizarNoticias() {



    let espaco = document.getElementById("espaco-noticias");

    let listaNoticias = [

        {
            imagem: "img/news.jpg",
            titulo: "Noticia 01",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
            imagem: "img/news.jpg",
            titulo: "Noticia 02",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imagem: "img/news.jpg",
            titulo: "Noticia 03",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imagem: "img/news.jpg",
            titulo: "Noticia 04",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imagem: "img/news.jpg",
            titulo: "Noticia 05",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }, {
            imagem: "img/news.jpg",
            titulo: "Noticia 06",
            descricao: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
    ]

    let template = "";

    for (let index = 0; index < listaNoticias.length; index++) {
        const noticia = listaNoticias[index];


        template += `<div class="col-md-2 cardNews">
        <img src="${noticia.imagem}" class="img-thumbnail" alt="Imagem de Notícia">
        <h4>${noticia.titulo}</h3>
        <p>${noticia.descricao}</p>
        </div>   `


    }



    espaco.innerHTML = template;
}
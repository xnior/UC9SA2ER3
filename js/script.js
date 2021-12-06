function mostrarMenu() {
    let menu = document.getElementById("menu");

    console.log(getComputedStyle(menu).display);

    if (getComputedStyle(menu).display != "none") {
        menu.style.display = "none";

    } else {
        menu.style.display = "flex";

    }
}

function mudartamanhotabelagamer() {
    let tabelagamer = document.getElementById("tabela-gamer");

    tabelagamer.style.fontSize = "8px";
}


function cadastrarNewsletter() {
    let emaildigitado = document.getElementById("newsletter-email").value;
    console.log(emaildigitado);
}



function rendenizarNoticias() {



    var espaco = document.getElementById("espaco-noticias");

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


        template += `<div class="col-md-3 cardNews">
        <img src="${noticia.imagem}" class="img-thumbnail" alt="Imagem de Notícia">
        <h4>${noticia.titulo}</h3>
        <p>${noticia.descricao}</p>
        </div>   `
    }


    espaco.innerHTML = template;
}

function rendenizarListaClassificados() {
    let espacoclassificados = document.getElementById("lista-classificados");

    let listaClassificados = [{
        nome: "Jose",
        sobrenome: "Maria",
        handle: "@jmar"
    }, {
        nome: "Maria",
        sobrenome: "Jose",
        handle: "@marj"
    }, {
        nome: "Rick",
        sobrenome: "Martin",
        handle: "@rmart"
    }, {
        nome: "Martin",
        sobrenome: "Rick",
        handle: "@maRick"
    }, {
        nome: "Ninja",
        sobrenome: "Garden",
        handle: "@ningar"
    }, {
        nome: "Rafael",
        sobrenome: "Nogueira",
        handle: "@rafnog"
    }, {
        nome: "Vin",
        sobrenome: "Martin",
        handle: "@vinmart"
    }, {
        nome: "José",
        sobrenome: "Antônio",
        handle: "@josan"
    }]
    console.log(listaClassificados);

    let templateclass = "";
    for (let index = 0; index < listaClassificados.length; index++) {
        const listclass = listaClassificados[index];
        templateclass += `<tr>
                            <th scope="row">${index+1}</th>
                            <td>${listclass.nome}</td>
                            <td>${listclass.sobrenome}</td>
                            <td>${listclass.handle}</td>
                         </tr>`
    }
    espacoclassificados.innerHTML = templateclass;
}
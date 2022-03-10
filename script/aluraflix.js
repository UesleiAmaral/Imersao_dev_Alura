const listaFilmes = 
[

    "https://3.bp.blogspot.com/-mXJgwfYZ7Ac/VspVv5CQTGI/AAAAAAAAA2Y/KSV1cmKKiQA/s1600/Mr-Robot-Season-1_inter.jpg",

    "https://m.media-amazon.com/images/I/910ZuOiYiRL._AC_SL1500_.jpg",

    "https://m.media-amazon.com/images/I/81BuB0z48hL._AC_SY550_.jpg",

    "https://br.web.img2.acsta.net/pictures/15/01/07/22/40/319755.jpg",

    "https://m.media-amazon.com/images/I/A1JVqNMI7UL._AC_SY550_.jpg",

    "https://br.web.img3.acsta.net/medias/nmedia/18/93/64/37/20269376.jpg",

    "https://br.web.img3.acsta.net/pictures/17/11/06/14/13/5164749.jpg?coixp=50&coiyp=47",

    "https://m.media-amazon.com/images/I/71DSBeYl2XL._AC_SL1500_.jpg",

    "https://upload.wikimedia.org/wikipedia/pt/1/10/CidadedeDeus.jpg",

    "https://pgl.gal/wp-content/uploads/2015/06/Filmografia-Literaria-Brasil-O-auto-da-compadecida-Capa-DVD.jpg"

];

for(let i = 0; i < listaFilmes.length; i++){

    document.write("<img class='img-filmes' src=" + listaFilmes[i]+ " alt='imagem dos filmes'>");
}
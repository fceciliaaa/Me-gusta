function meGusta(elemento){
    let contenidoCard1 = elemento.closest(".card-1");
    let numeroLikes= contenidoCard1.querySelector(".numero-likes");
    let contador= Number(numeroLikes.innerText);
    contador++;
    numeroLikes.innerText = contador;
}


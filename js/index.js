function meGusta(elemento){
    let boton = elemento.closest(".card-1");
    let contador= boton.querySelector(".numero-likes");
    let numero= Number(contador.innerText);
    numero++;
    contador.innerText = numero;
}

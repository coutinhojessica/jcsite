function escrever(elemento) {
    const fraseArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    fraseArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
    });
}
const titulo = document.querySelector('h1');
escrever(titulo);
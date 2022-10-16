alert("Bienvenido al juego experimental 1");
let nombre = prompt("Como te llamas"); 
alert("Hola " + nombre + " gracias por jugar mi juego");
const textos = [
"Cuando has eliminado lo imposible, lo que queda, por improbable que sea, debe ser la verdad",
"No hay nada más engañoso que un hecho obvio",
"Ya debería saber que cuando un hecho parece oponerse a una larga serie de deducciones, invariablemente resulta ser capaz de soportar alguna otra interpretación",
"Nunca hago excepciones. Una excepción refuta la regla",
"Lo que un hombre puede inventar, otro puede descubrirlo",
"Nada aclara tanto un caso como exponerlo a otra persona",
"La educación nunca termina, Watson. Es una serie de lecciones, con la mayor para la última",
];
let palabras = [];
let palabraIndice = 0;
let startTime = Date.now();
const textoElemento = document.getElementById('texto');
const messageElement = document.getElementById('mensaje');
const typedValueElement = document.getElementById('texto-tipeado');
document.getElementById('inicio').addEventListener('click', ( ) => {
const textoIndice = Math.floor(Math.random() * textos.length);
const texto = textos[textoIndice];
palabras = texto.split(' ');
palabraIndice = 0;
const spanPalabras = palabras.map(function(palabra) { return`<span>${palabra} </span>`});
  textoElemento.innerHTML = spanPalabras.join('');
  textoElemento.childNodes[0].className = 'highlight';
  messageElement.innerText = '';
typedValueElement.value = ''
typedValueElement.focus();
startTime = new Date().getTime(); 
});
typedValueElement.addEventListener('input', ( ) => {
const currentWord = palabras[palabraIndice];
const typedValue = typedValueElement.value;
if (typedValue === currentWord && palabraIndice === palabras.length - 1) {
const elapsedTime = new Date().getTime() - startTime;
const message = alert (`FELICITACIONES! Finalizaste en ${elapsedTime / 1000} segundos.`);
  messageElement.innerText = message;
} else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {
    typedValueElement.value = '';
    palabraIndice++;
for (const palabraElemento of textoElemento.childNodes) {
      palabraElemento.className = '';
}
textoElemento.childNodes[palabraIndice].className = 'highlight';
} 
  else if (currentWord.startsWith(typedValue)) {
typedValueElement.className = '';
  } else {                                      
    typedValueElement.className = 'error';
  }
});
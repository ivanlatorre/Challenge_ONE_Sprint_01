function encriptar(){
    let texto = document.getElementById("texto").value;
    let textoResuelto = document.getElementById("texto-resuelto");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let copiar = document.getElementById("copiar");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");
    
    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    if (texto.length != 0){
        textoResuelto.innerText = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        copiar.style.display = "block";
        muneco.style.display = "none";    
    }else{
        muneco.style.display = "block";
        copiar.style.display = "none";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
    }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let textoResuelto = document.getElementById("texto-resuelto");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let copiar = document.getElementById("copiar");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0){
        textoResuelto.innerText = textoCifrado;
        tituloMensaje.textContent = "";
        parrafo.textContent = "";
        copiar.style.display = "block";
        muneco.style.display = "none";
    }else{
        muneco.style.display = "block";
        copiar.style.display = "none";
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Debes ingresar algún texto");
        }
}
/*Boton copiar*/
function copiarPortapapeles(){
    let textoResuelto = document.getElementById("texto-resuelto");
    let copiar = document.getElementById("copiar");

    navigator.clipboard.writeText(textoResuelto.textContent);
    copiar.textContent='Copiado'
    setTimeout(()=>copiar.textContent = "Copiar",4000); 
}
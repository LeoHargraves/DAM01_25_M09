function fase1() {
    console.log("Autor original: " + autor.textContent);
    console.log("Título original: " + titular.textContent);
    console.log("Comentario por defecto: " + comentario.value);
}

function fase2() {
    titular.textContent = "Los platanos serán lilas en el futuro!";
    autor.textContent = "Leo Castán";
    texto.textContent = "Cientificos dicen; Las constantes mutaciones en los plàtanos entre otras frutas provocará..."
    comentario.value = "¡No me lo puedo creer, es increíble!"
}

function fase3() {
    let nuevaNoticia = document.createElement('a2');
    let titulo=document.createElement('h1')
    titulo.textContent=("Nueva noticia agregada")
    nuevaNoticia.append(titulo)
    let paragrafo1=document.createElement('p')
    paragrafo1.classList.add('meta')
    paragrafo1.textContent=("Publicado por Leo")
    nuevaNoticia.append(paragrafo1)
    let paragrafo2=document.createElement('p')
    paragrafo2.textContent=("Este es el contenido de la nueva noticia")
    nuevaNoticia.append(paragrafo2)
    let comments=document.createElement('div')
    comments.style.marginTop('20px')
    comments.style.border('1px solid #ccc')
    comments.style.padding('10px')
    let tituloComentarios=document.createElement('h3')
    tituloComentarios.textContent=("Zona de Comentarios")
    nuevaNoticia.append(tituloComentarios)
    
    body.insertBefore(nuevaNoticia);
}


let autor = document.getElementById("autor");
let titular = document.getElementById("titular");
let comentario = document.getElementById("input-comentario");
let texto = document.getElementById("cuerpo-noticia");

fase1()
fase2()
fase3()
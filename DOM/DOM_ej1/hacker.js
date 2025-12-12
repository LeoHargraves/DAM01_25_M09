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
    let nuevaNoticia = document.getElementById('a1'); 
    nuevaNoticia.innerHTML = `
        <h1>Nueva noticia agregada</h1>
        <p class="meta">Publicado por: <span>María Gómez</span></p>
        <p>Este es el contenido de la nueva noticia añadida dinámicamente.</p>
    `;
    let body = document.getElementById("body")
    body.insertBefore(nuevaNoticia);
}


let autor = document.getElementById("autor");
let titular = document.getElementById("titular");
let comentario = document.getElementById("input-comentario");
let texto = document.getElementById("cuerpo-noticia");

fase1()
fase2()
fase3()
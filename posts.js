const posts = [
{
titulo: "Tecnologia transforma o trabalho no campo",
categoria: "TECNOLOGIA",
imagem: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80",
texto: "Novas ferramentas tecnológicas estão ajudando produtores a acompanhar plantações, aumentar a produtividade e tomar decisões mais eficientes."
},

{
    titulo: "Agricultura sustentável ganha espaço",
    categoria: "SUSTENTABILIDADE",
    imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
    texto: "Práticas sustentáveis ajudam a preservar os recursos naturais e permitem que a produção agrícola continue crescendo de maneira responsável."
},

{
    titulo: "Máquinas modernas aumentam a produtividade",
    categoria: "MÁQUINAS",
    imagem: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=900&q=80",
    texto: "A modernização das máquinas agrícolas facilita diversas atividades no campo e contribui para uma produção mais eficiente."
},

{
    titulo: "Cuidar do solo é cuidar da produção",
    categoria: "AGRICULTURA",
    imagem: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80",
    texto: "O solo é um dos principais recursos da agricultura. Seu cuidado é essencial para manter a qualidade e a produtividade das plantações."
},

{
    titulo: "A importância da água para o agronegócio",
    categoria: "MEIO AMBIENTE",
    imagem: "https://images.unsplash.com/photo-1463123081488-789f998ac9c4?auto=format&fit=crop&w=900&q=80",
    texto: "A utilização consciente da água é fundamental para manter a produção agrícola e preservar esse importante recurso natural."
},

{
    titulo: "Inovação traz novas possibilidades para o campo",
    categoria: "INOVAÇÃO",
    imagem: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=900&q=80",
    texto: "Drones, sensores e sistemas inteligentes estão criando novas possibilidades para produtores e tornando o campo cada vez mais conectado."
}


];

const container = document.getElementById("posts-container");

posts.forEach(function(post) {

const article = document.createElement("article");


article.innerHTML = `

    <img
        src="${post.imagem}"
        alt="${post.titulo}"
    >

    <span class="post-categoria">
        ${post.categoria}
    </span>

    <h3>
        ${post.titulo}
    </h3>

    <p>
        ${post.texto}
    </p>

    <a href="#">
        Ler publicação →
    </a>

`;


container.appendChild(article);


});

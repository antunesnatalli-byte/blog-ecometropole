const posts = [
{
titulo: "A importância da tecnologia no agronegócio",
imagem: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80",
texto: "A tecnologia está transformando o agronegócio, ajudando produtores a aumentar a produtividade, reduzir custos e cuidar melhor dos recursos naturais."
},

{
    titulo: "Agricultura sustentável",
    imagem: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
    texto: "A agricultura sustentável busca produzir alimentos de forma eficiente, preservando o solo, a água e o meio ambiente para as próximas gerações."
},

{
    titulo: "A importância do solo para a produção",
    imagem: "https://images.unsplash.com/photo-1592982537447-6f2a6a0a6f7a?auto=format&fit=crop&w=800&q=80",
    texto: "Um solo saudável é fundamental para uma boa produção agrícola. O manejo correto ajuda a preservar nutrientes e aumentar a produtividade."
},

{
    titulo: "Máquinas agrícolas modernas",
    imagem: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80",
    texto: "As máquinas agrícolas modernas tornam o trabalho no campo mais rápido e eficiente, contribuindo para uma produção cada vez mais tecnológica."
},

{
    titulo: "O papel da água na agricultura",
    imagem: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80",
    texto: "A água é um dos principais recursos utilizados na agricultura. Por isso, seu uso consciente é essencial para garantir uma produção sustentável."
},

{
    titulo: "Inovação no campo",
    imagem: "https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=800&q=80",
    texto: "Novas tecnologias, sensores, drones e sistemas inteligentes estão mudando a maneira como os produtores acompanham suas plantações."
}


];

const container = document.getElementById("posts-container");

posts.forEach(function(post) {

const article = document.createElement("article");

article.innerHTML = `
    <img src="${post.imagem}" alt="${post.titulo}">

    <h2>${post.titulo}</h2>

    <p>${post.texto}</p>

    <a href="#">Leia mais</a>
`;

container.appendChild(article);


});

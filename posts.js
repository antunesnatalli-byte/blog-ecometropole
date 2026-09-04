// Script de gerenciamento de interações e posts do Blog Agrofuturo
console.log("Script de posts do Agrofuturo carregado com sucesso!");

const postsAgrofuturo = [
    {
        titulo: "Inteligência Artificial na Colheita",
        descricao: "Como algoritmos de machine learning preveem o momento ideal para a colheita de grãos."
    }
];

// Selecionando o botão de alternância de tema na página
const btnTemaEscuro = document.querySelector(".btn-tema-escuro");

// Adicionando o evento de clique que chama a função de mudança de tema
if (btnTemaEscuro) {
    btnTemaEscuro.addEventListener("click", mudaTema);
}

// Função responsável por alternar a classe do tema escuro no body
function mudaTema() {
    const corpoPagina = document.body;

    if (corpoPagina.classList.contains("tema-escuro")) {
        corpoPagina.classList.remove("tema-escuro");
    } else {
        corpoPagina.classList.add("tema-escuro");
    }
}

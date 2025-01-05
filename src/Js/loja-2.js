document.addEventListener("DOMContentLoaded", function() {
    const imgProduto = document.querySelector(".img-produto img");
    const btnBranco = document.querySelector(".cor-produto .branco");
    const btnRoxo = document.querySelector(".cor-produto .roxo");
    const btnPreto = document.querySelector(".cor-produto .preto");

    btnBranco.addEventListener("click", function() {
        imgProduto.src = "../../assets/Desktop/Loja/Moletombranco-loja2.png";
    });

    btnRoxo.addEventListener("click", function() {
        imgProduto.src = "../../assets/Desktop/Loja/MoletomRoxo-loja2.png";
    });

    btnPreto.addEventListener("click", function() {
        imgProduto.src = "../../assets/Desktop/Loja/MoletomNexcold-loja2.png";
    });
});

const tamanhoButtons = document.querySelectorAll(".tamanho-produto button");

tamanhoButtons.forEach(button => {
    button.addEventListener("click", () => {
        tamanhoButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
    });
});
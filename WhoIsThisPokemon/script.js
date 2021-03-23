//Nome verdadeiro do Pokemon
const pokemon = "Pikachu";
const confirmar = document.querySelector("button");
const section = document.querySelector("section")
function verificaPokemon() {
    //Selecionando o "P" do HTML
    const p = document.querySelector("p")
    //Pegando o Valor do Usuário Apos digitar no input
    const entradaDeValor = document.querySelector("input").value;

    //Adicionando a classe "section.active" do css
    section.classList.add("active");

    //Verifica se o Nome do Pokemon é igual o usuário digitou no input 
    if(pokemon == entradaDeValor || entradaDeValor == "pikachu") {
        //Escrevendo no "P"
        p.textContent = "Exata";
        //Removendo a classe "p.error" do css
        p.classList.remove("error");
    }else{
        //Adicionando a classe "p.error" do css
       p.classList.add("error");
       //Escrevendo no "P"
       p.textContent = "Errada";
    }   
}
    //Fução para remover o section.active
function fechaSecaoActive() {
    section.classList.remove("active");
}
    //Função ao clicar fora da seção, remover
function clicaForaFechaSecao(event){
    console.log(event.target);

    if(event.target.tagName == "SECTION") {
        section.classList.remove("active");
    }
}
    //Ao clicar em confirmar executa a função
confirmar.onclick = verificaPokemon;

    //Ao clicar no botão de fechar, fecha a seção
section.querySelector("button").onclick = fechaSecaoActive;
    //Ao clicar fora da seção, fecha a seção
section.onclick = clicaForaFechaSecao;

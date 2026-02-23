const { createElement } = require("react");

function card (data){
    const elemento = document.createElement("div");
    const image = document.createElement ("img");
    const conteudo = document.createElement("div");
    const titulo = document.createElement ("h3");
    const paragrafo =  document.createElement ("p");
    const botao = document.createElement ("button"); 
}








async function produtos () {
    const resposta = await fetch("https://fakestoreapi.com/products")
    const data = await resposta.json();
    
    const container = document.querySelector('.grid')

}
produtos()
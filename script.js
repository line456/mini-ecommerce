async function produtos () {
    const Resposta = await fetch("https://fakestoreapi.com/products")
    const Data = await Resposta.json();
    
    const Container = document.querySelector('.grid')
   Data.forEach(card => {
     Container.innerHTML += `
    <div class="card">
      <img src="${card.image}">
      <div class="card-content">
        <h3>${card.title}</h3>
        <p class="price">R$ ${card.price} </p>
        <button>Adicionar ao Carrinho</button>
      </div>
    </div>`
    
   });

}
produtos()
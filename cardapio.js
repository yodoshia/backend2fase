const cardapio = [
    {produto: "X-Burgues", preco: 18.90, categoria: "lanche"},
    {produto: "Porção de polentas", preco: 18.00, categoria: "Porção"},
    {produto: "laranja", preco: 10.00, categoria: "Sucos"},
    {produto: "milkshake", preco: 24.00, categoria: "sobremesa"}
];

//console.log(cardapio)
//console.log(cardapio[2]);
//console.log(cardapio[2].produto);
//console.log(cardapio[2].preco);

const pedido = [];

const cliente = {
    nome: "Maquinhos",
    fidelidade: true
};


function exibircardapio(lista){
    console.log("===cardapio===");
    console.log(`1. ${lista[0].produto} - R$ ${lista[0]. preco} - ${lista[0].categoria}`);
     console.log(`2. ${lista[1].produto} - R$ ${lista[1]. preco} - ${lista[1].categoria}`);
      console.log(`3. ${lista[2].produto} - R$ ${lista[2]. preco} - ${lista[2].categoria}`);
       console.log(`4. ${lista[3].produto} - R$ ${lista[3]. preco} - ${lista[3].categoria}`);
};


exibircardapio(cardapio);

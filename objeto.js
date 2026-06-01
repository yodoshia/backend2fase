const animal ={
nome: "mendingo",
especie: "cachorro",// string
idade: 8, // number
vacinado: false,//boolean
tutor: false
};

console.log(animal.nome);
console.log(animal.especie);
//console.log(animal.idade);

animal.idade = "7 anos"
animal.nome = "sapao"
animal.vacinado = true
console.log(animal.idade)
console.log(animal);

console.log(`O ${animal.especie} chama-se ${animal.nome}!`);
console.log(`O ${animal.nome} tem ${animal.idade}!`);

//Alerta no Navegador
alert("Olá Mundo!")

//Exibe os dados no console 
console.log("Olá mundo 3.0")

//Criar variáveis
let idade = 28 //number
let nome ="Andriani" //string
let cidade ="São Paulo" //string
let estado ="SP" // string
let logado = true //boolean
let lista = ["cama","mesa","cadeira","sofá"] // array
let nomeCompleto = {nome: "Andriani", idade: 28} 

/*Exibir os logs das varáiveis criadas no console*/ 
console.log(nome)
console.log(idade)
console.log(cidade)
console.log(estado)
console.log(nomeCompleto,nome,idade,cidade,estado)
console.log(typeof nome)

/*Exercício de variáveis #1 */
let car = "Ferrari"
console.log(car)

let precobolo = 15.90
console.log(precobolo)

cidade = "Minas Gerais"
console.log(cidade)

/*Obrigação de uso ; , que define o fim da linha*/
let agora = "agora"; let vai="vai";
console.log(agora,vai);


/* let = contexto local, const = , var = qualquer contexto*/
let eu = "Uíza"
console.log(eu);

eu = "Uíza Carvalho"
console.log(eu);

const i = "Uíza"
console.log(i);

var u = "Será que sou eu?"
console.log(u);

const estudar = "continue a nadar"
//estudar = "nao vai mudar pois é uma constante"

//Operações em variáveis
let x = 20
x = x + 1
console.log(x)
let nome2 = "Brunno"
let sobrenome2 = "Andriani"
let nomeCompleto2 = nome2 + " " + sobrenome2
console.log(nomeCompleto2)
let y = 2
let o = 6
soma = y + o
console.log(soma)

//String x Template String
let teste = "Me"
let teste2 = "Euzinha"
let teste3 = teste + " " + teste2
console.log(teste3)

const lista = [
{
    name: 'sabao em po',
    preco: 30,
},
{
    name: 'toalha',
    preco: 30,
},
{
    name: 'cereal',
    preco: 12,
},

];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current){
        console.log((prev));
        console.log((current));
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));
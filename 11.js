let recebido = '{"produto": "Monitor","preco": 900,"estoque": 4}'

const recebidoObjeto = JSON.parse(recebido);
recebidoObjeto.preco = recebidoObjeto.preco * (90/100);
recebidoObjeto.estoque--;
const recebidoAtualizado = JSON.stringify(recebidoObjeto);

console.log(typeof(recebidoObjeto));
console.log(recebidoAtualizado);
console.log(typeof(recebidoAtualizado));
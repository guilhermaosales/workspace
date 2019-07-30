const usuarios = [
    {nome: "Robinson", idade: 18},
    {nome: "William", idade: 28},
    {nome: "Janaina", idade: 19},
    {nome: "Carla", idade: 25},
    {nome: "Maíra", idade: 32},
    {nome: "George", idade: 30},
    {nome: "Camila", idade: 27},
    {nome: "Carlinhos", idade: 22},
    {nome: "Jamilso", idade: 29},
    {nome: "Claudio", idade: 30},
];
    
let minhaTabela = document.querySelector('#corpoDaTabela');

let quantidadeDeUsuarios = usuarios.reverse().length;

while(quantidadeDeUsuarios) {
    const indice = quantidadeDeUsuarios - 1;
    minhaTabela.insertAdjacentHTML('beforeend',`
    <tr>
        <td>${usuarios[indice].nome}</td>
        <td>${usuarios[indice].idade}</td>
    </tr>
`);

    quantidadeDeUsuarios--;
}
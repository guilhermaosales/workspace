let mapDaFelicidadeOnline = new Map([
    ['iti malias', 'https://twitter.com/_iti_malia'],
    ['Eu amo os animais','https://twitter.com/_IloveAnimais_'],
    ['bichos triste fofo','https://twitter.com/BichosTriste']
]);

function transformaListaEmFrases(listaDeLinks){
    const podemosExecutarATransformacao = typeof listaDeLinks === 'object';

    if(podemosExecutarATransformacao){
        let frases = [];

        for (let item of listaDeLinks.entries()){
            const [usuario, link] = item;
        
            frases.push(`Nome de usuário: ${usuario}, Link: ${link}`);
        }
        return frases;

    } else {
        console.log('Por favor, passe um Map como parâmetro da função');
    }
}

function imprimeContas(funcaoTransformadora, listaDeLinks){
    return funcaoTransformadora(listaDeLinks);
};

const listaDeFrases = imprimeContas(transformaListaEmFrases, mapDaFelicidadeOnline);

console.log(listaDeFrases);




let mapDaFelicidadeOnline = new Map([
    ['iti malias', 'https://twitter.com/_iti_malia'],
    ['Eu amo os animais','https://twitter.com/_IloveAnimais_'],
    ['bichos triste fofo','https://twitter.com/BichosTriste']
]);

function imprimeContas(conta){
    console.log(conta);
}

for (let item of mapDaFelicidadeOnline.entries()){
    imprimeContas(item[0]);
    imprimeContas(item[1]);
}

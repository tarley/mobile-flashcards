import {AsyncStorage} from 'react-native';

const key = 'Baralhos';

export function removerTodos() {
    AsyncStorage.removeItem(key).done();
}

export function adicionar(titulo) {
    AsyncStorage.mergeItem(key, JSON.stringify({
        [titulo]: {
            titulo,
            questoes: []
        }    
    })).done()
}

export function buscarTodos() {
    return AsyncStorage.getItem(key)
        .then(value => JSON.parse(value));
}

export function buscarPorTitulo(titulo) {
    return buscarTodos()
        .then(baralhos => baralhos[titulo]);
}

export function adicionarQuestao(titulo, pergunta, resposta) {
    buscarTodos()
        .then(baralhos => {
            return {
                ...baralhos,
                [titulo]: {
                    titulo,
                    questoes: baralhos[titulo].questoes.concat([{pergunta, resposta}])
                }
            }
        })
        .then((novoBaralho) => {
            AsyncStorage.removeItem(key).done();

            console.log('*** Novo objeto criado ***')
            console.log(novoBaralho)
            AsyncStorage.mergeItem(key, JSON.stringify(novoBaralho)).done()
        })

    /*
    const baralho = await buscarPorTitulo(titulo);
    
    if(baralho) {
        baralho.cartas.push({
            pergunta,
            resposta
        })
        console.log(baralho)
        await AsyncStorage.setItem(key, JSON.stringify({
            [titulo]: {
                titulo,
                cartas: baralho.cartas
            }    
        }))
    }
    else 
        throw new Error(`Baralho ${titulo} não foi encontrado`);
        */
}
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
    return buscarTodos()
        .then(baralhos => {
            return {
                ...baralhos,
                [titulo]: {
                    titulo,
                    questoes: baralhos[titulo].questoes.concat([{pergunta, resposta}])
                }
            }
        })
        .then((novoBaralho) => AsyncStorage.mergeItem(key, JSON.stringify(novoBaralho)).done())
}
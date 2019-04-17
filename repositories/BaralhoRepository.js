import {AsyncStorage} from 'react-native';

const key = 'Baralhos';

export function adicionar(titulo) {
    return AsyncStorage.mergeItem(key, JSON.stringify({
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

function removerTodos() {
    return AsyncStorage.removeItem(key).done();
}

export function cargaInicial() {
    
    removerTodos()
    
    AsyncStorage.mergeItem(key, JSON.stringify(
        {
            'JavaScript': {
                titulo: 'JavaScript',
                questoes:[
                    {pergunta: 'Does React Native work with Android?', resposta: 'Yes, it works'},
                    {pergunta: 'Does React Native work with IOS?', resposta: 'Yes, it works, but more expensive'}
                ]
            },
            'React': {
                titulo: 'React',
                questoes: []
            },
            'React Native': {
                titulo: 'React Native',
                questoes: []
            }
        }
    )).done()
}
import {AsyncStorage} from 'react-native';

const key = 'Baralhos';

export async function removeAll() {
    await AsyncStorage.removeItem(key);
}

export async function buscarTodos() {
    return await AsyncStorage.getItem(key).then((value) => JSON.parse(value));
}

export async function buscarPorTitulo(titulo) {
    const baralhos = await buscarTodos();
    
    if(baralhos)
        return baralhos[titulo];
    
    return null;
}
export async function salvar(titulo) {
    await AsyncStorage.mergeItem(key, JSON.stringify({
        [titulo]: {
            titulo,
            cartas: []
        }    
    }))
}
export async function adicionarCartao(titulo, pergunta, resposta) {
    const baralho = await buscarPorTitulo(titulo);

    if(baralho) {
        baralho.cartas.push({
            pergunta,
            resposta
        })

        await AsyncStorage.mergeItem(key, JSON.stringify({
            [titulo]: {
                titulo,
                cartas: baralho.cartas
            }    
        }))
    }
    else 
        throw new Error(`Baralho ${titulo} não foi encontrado`);
}
import React from 'react';
import {StyleSheet} from 'react-native';
import {Content, Text, Button} from 'native-base';

import QuizResposta from './QuizResposta';

export default function QuizQuestoes({questao, exibirResposta, onPressExibirResposta, onPressCerto, onPressErrado}) {
    return (
        <Content padder contentContainerStyle={styles.container}>
            <Text style={styles.pergunta}>{questao.pergunta}</Text>
            {
                exibirResposta 
                    ? (<QuizResposta questao={questao} /> )
                    : (<QuizResposta onClick={onPressExibirResposta} />)
            }
            <Button block success 
                onPress={onPressCerto}
                style={styles.botaoAcao}
            >
                <Text>Certo</Text>
            </Button>
            <Button block dark 
                onPress={onPressErrado}
                style={styles.botaoAcao}>
                <Text>Errado</Text>
            </Button>
        </Content>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pergunta: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 22,
        color: 'black',
        marginBottom: 10,
        textAlign: 'center'
    },
    resposta: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 22,
        color: 'red',
        marginBottom: 50
    },
    botaoAcao: {
        marginBottom: 10
    }
});
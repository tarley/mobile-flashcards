import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Content, Text, Button} from 'native-base';

export default function QuizResultado({numQuestoes, numAcertos, onPressRecomecarQuiz, onPressVoltar}) {
    let totalAcertos = numAcertos * 100 / numQuestoes

    return (
        <Content padder contentContainerStyle={styles.container}>
            <Text style={styles.tituloResultado}>{`${totalAcertos}%`}</Text>
            <Text style={styles.subtituloResultado}>Correto!</Text>
            <Button block success 
                onPress={onPressRecomecarQuiz}
                style={styles.botaoAcao}
            >
                <Text>Recomeçar Quiz</Text>
            </Button>
            <Button block 
                onPress={onPressVoltar}
                style={styles.botaoAcao}>
                <Text>Voltar ao baralho</Text>
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
    botaoAcao: {
        marginBottom: 10
    },
    tituloResultado: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 56,
        color: 'blue',
        textAlign: 'center'
    },
    subtituloResultado: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 32,
        color: 'blue',
        textAlign: 'center'
    }
});
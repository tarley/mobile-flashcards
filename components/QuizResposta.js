import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Button} from 'native-base';

export default function QuizResposta({questao, onClick}) {
    if(questao)
        return ( <Text style={styles.resposta}>{questao.resposta}</Text> )
    else
        return ( 
            <Button block info 
                style={styles.botaoResposta}
                onPress={onClick}>
                <Text>Ver resposta</Text>
            </Button>
        )
}

const styles = StyleSheet.create({
    resposta: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 22,
        color: 'red',
        marginBottom: 50
    },
    botaoResposta: {
        marginBottom: 50
    }
});
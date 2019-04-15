import React from 'react';
import {StyleSheet} from 'react-native';
import {Body, Text, CardItem } from 'native-base';

export default function Baralho({titulo, questoes, onPress}) { 
    const qtd = questoes.length;

    return(
        <CardItem bordered button 
            style={styles.cardItem}
            onPress={onPress} >
            <Body style={styles.cardBody}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.qtdQuestoes}>{`${qtd} ${qtd == 1 ? 'Card' : 'Cards'}`}</Text>
            </Body>
        </CardItem>
    );
}

const styles = StyleSheet.create({
    cardItem: {
        height: 100, 
        justifyContent: 'center'
    },
    cardBody: {
        alignItems: 'center'
    },
    titulo: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 20,
        color: 'black'
    },
    qtdQuestoes: {
        fontFamily: "Roboto",
        fontWeight: "bold",
        fontSize: 12,
        color: 'gray'
    }
  });
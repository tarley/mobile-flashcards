import React, {Component} from 'react';
import {Container} from 'native-base';

import AppHeader from '../components/AppHeader';
import QuizQuestoes from '../components/QuizQuestoes';
import QuizResultado from '../components/QuizResultado';

export default class QuizView extends Component {
    state = {
        index: 0,
        exibirResposta: false,
        acertos: 0,
        erros: 0
    }
    voltar() {
        const baralho = this.props.navigation.getParam('baralho');
        this.props.navigation.navigate('Baralho', {baralho})
    }
    render() {
        const baralho = this.props.navigation.getParam('baralho');
        const {index, acertos, erros, exibirResposta} = this.state;
        const questao = baralho.questoes[index]

        if(index < baralho.questoes.length )
            return(
                <Container>
                    <AppHeader 
                        subtitulo={`Quiz ${index + 1}/${baralho.questoes.length}`}
                        botaoEsquerdo={() => this.voltar()} 
                    />
                    <QuizQuestoes
                        questao={questao} 
                        exibirResposta={exibirResposta}
                        onPressExibirResposta={() => this.setState({ exibirResposta: true})}
                        onPressCerto={() => 
                            this.setState({
                                acertos: acertos + 1,
                                index: index + 1,
                                exibirResposta: false
                            })
                        }
                        onPressErrado={() => 
                            this.setState({
                                erros: erros + 1,
                                index: index + 1,
                                exibirResposta: false
                            })
                        }
                    />
                </Container>
            )
        else
            return (
                <Container>
                    <AppHeader 
                        subtitulo='Resultado do Quiz'
                        botaoEsquerdo={() => this.voltar()}
                    />
                    <QuizResultado
                        numQuestoes={baralho.questoes.length}
                        numAcertos={acertos}
                        onPressRecomecarQuiz={() => 
                            this.setState({
                                index: 0,
                                exibirResposta: false,
                                acertos: 0,
                                erros: 0
                            })
                        }
                        onPressVoltar={() => this.voltar()}
                    />
                </Container>
            )
    }
}
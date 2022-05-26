import React, { useState, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import {Container, Title, Texto, Infors, Bolds, BoxImagens} from '../Styles';

import YoutubePlayer from "react-native-youtube-iframe";

export default function SalaEletrica01() {
    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
          setPlaying(false);
        }
      }, []);
    
      const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
      }, []);
 return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
    <Container>
        <Title>
        Alicate amperimetro
        </Title>
        <Image
              style={styles.Img}
              source={require('../../../assets/alicate-amperimetro.jpg')}
            />
        <Title>
        O que é alicate amperímetro
        </Title>
        <View>
            <YoutubePlayer
                height={250}
                play={playing}
                videoId={"qlmxjn0-_Y4"}
                onChangeState={onStateChange}
            />
            {/* <Button title={playing ? "pause" : "play"} onPress={togglePlaying} /> */}
        </View>
        <Texto>
        O amperímetro, ou alicate amperímetro, é um instrumento utilizado para medir a corrente elétrica. O nome do aparelho faz referência aos ampéres, unidade de medida utilizada neste tipo de medição. Estes aparelhos são muito utilizados na engenharia elétrica e em diversos tipos de indústria.
        </Texto>
        <Title>
        Para que serve alicate amperímetro?
        </Title>
        <Texto>
        O amperímetro serve para a medição da corrente elétrica, sua função é importante para verificar se a energia elétrica que está passando por aquele componente está de acordo com o esperado. Isso garante que o sistema elétrico está equilibrado e sem apresentar riscos. Além do alicate amperímetro, outros aparelhos podem fazer essa medição, como o multímetro.
        </Texto>
        <Title>
        Alicate amperímetro ou multímetro? 
        </Title>
        <Texto>
        A principal diferença entre estes dois aparelhos é que o multímetro tem a capacidade de medir outras grandezas elétricas, como a tensão e a resistência. O amperímetro se restringe aos ampéres e volts. No entanto, ambos os aparelhos são precisos e apresentam os resultados esperados - desde que sejam conservados e utilizados corretamente.
        </Texto>
        <Title>
        Dicas de como usar o alicate amperímetro
        </Title>
        <Texto>
        Amperímetros devem ser conectados em série ao sistema, nunca em paralelo. Se ele for conectado em paralelo, corre-se o risco de danificar tanto o aparelho quanto o próprio componente que está sendo medido.

A resistência interna do amperímetro deve estar sempre no nível mais baixo para conseguir resultados mais precisos.

Se for utilizado em corrente alternada, não é preciso se preocupar com a polaridade. Agora, caso o amperímetro seja utilizado em uma corrente contínua, é preciso que a corrente seja conectada pelo lado positivo e saia pelo lado negativo do aparelho.
        </Texto>
        <Image
              style={styles.Img}
              source={require('../../../assets/medicao-alicate.jpg')}
            />
            <Title>
            Categorias
            </Title>
            <Texto>
            Saiba quais são as Categorias de Multímetros, suas aplicações e os riscos caso utilizar o equipamento na categoria errada.
            {"\n"}{"\n"}
            Você sabia que o Multímetro possui Categorias de emprego e não podem ser utilizados para qualquer finalidade? Caso você nunca tenha se dado conta desse importante detalhe, você pode estar correndo um enorme risco, transformando uma excelente ferramenta de mediação elétrica em um risco a sua segurança.
            {"\n"}{"\n"}
Observe que sempre que existe a necessidade de classificar um determinado produto em relação ao emprego e utilização utilizamos padrões, para o multímetro não é diferente.
            </Texto>
            <BoxImagens>
            <Image
              style={styles.Img}
              source={require('../../../assets/cat1.jpg')}
            />
            <Image
              style={styles.Img}
              source={require('../../../assets/cat2.jpg')}
            />
            <Image
              style={styles.Img}
              source={require('../../../assets/cat3.jpg')}
            />
            </BoxImagens>
            <Texto>
            Estas características estão associadas a exposição do equipamento a sobretensões (transientes) e classifica o dispositivo através distância a qual este está sendo aplicado a partir da fonte de energia. 
            </Texto>
            <Title>
            PORQUE SEPARAR EM CATEGORIAS?
            </Title>
            <Texto>
            O motivo é pela segurança do profissional. Separando os Multímetros em Categorias possibilita uma maior proteção e acessibilidade do operador aos aparelhos corretos (ideias para determinado tipo de trabalho) de modo a garantir a segurança e bem-estar do usuário.
            {"\n"}{"\n"}
As categorias são classificadas em CAT I, II, III e IV e referem-se à capacidade do equipamento de suportar os transientes (surto de tensão elétrica que ocorre num intervalo de tempo muito pequeno) da rede. Ou seja, quanto maior a categoria, maior a resistência a um possível surto da rede elétrica, e consequentemente, mais segurança ao operador.
            </Texto>
            <Title>
            CAT I
            </Title>
            <Texto>
            Equipamentos destinados a medições de baixa tensão e usados em circuitos isolados da rede elétrica de alimentação, são os que possuem menor proteção a exposição do profissional.
            {"\n"}{"\n"}
Um profissional que faz uso deste tipo de equipamento jamais deverá utilizá-lo para medições de tomadas e/ou circuitos de alimentação principal. Poderá sim utilizá-lo na medição de circuitos como os de rádio transmissor, TV’s, circuitos eletrônicos, por exemplo.
            </Texto>

            <Title>
            CAT II
            </Title>
            <Texto>
            Este instrumento será utilizado para medições em eletrodomésticos de uso geral, e tomadas distantes a mais de 10m do CAT III ou 20m do CAT IV.
            </Texto>

            <Title>
            CAT III
            </Title>
            <Texto>
            Os equipamentos que compreendidos nesta categoria são denominados de nível de distribuição e permitirá com que o multímetro seja utilizado para a verificação de tensões nas tomadas empregadas em ambientes Residenciais e Comerciais, bem como em iluminação e em circuitos de distribuição destes ambientes (medições trifásicas e equipamentos fixos (motores).
            </Texto>

            <Title>
            CAT IV
            </Title>
            <Texto>
            Possui o maior nível de Categoria de emprego e são denominados de nível primário de alimentação. Ideias para trabalho em painéis de distribuição, instalações subterrâneas, instalações externas, etc.
            {"\n"}{"\n"}
            Possuem no entanto maior nível de proteção pois são através deles que realizaremos as medições em locais mais perigosos e que oferecem maior riscos de transientes de maior intensidade.
            {"\n"}{"\n"}
            Após entender as aplicações de cada categoria, podemos afirmar que um Categorias de Multímetros inferior (CAT I) jamais deve ser empregado em medições de circuitos e/ou dispositivos que estejam em categorias acima deste (CAT II, III ou IV). No entanto, Categorias de Multímetros superiores podem ser utilizados para medição de circuitos de categoria mais baixas.
            </Texto>

            <Title>
            TABELA DE TENSÕES MÁXIMAS ADMISSÍVEIS
            </Title>
            <Texto>
            Paralelamente à classificação das Categorias, existe também a classificação de tensão de cada Multímetro. Apesar de um aparelho CAT II poder realizar uma medição de até 1000V, não significa que é mais seguro do que um aparelho CAT IV que mede até 600V.
            </Texto>

            <Image
              style={styles.Img}
              source={require('../../../assets/tabela.jpg')}
            />
            <Title>
            CHAVE DE TESTES
            </Title>
            <Image
              style={styles.Img}
              source={require('../../../assets/chave-de-testes.jpg')}
            />
            <View>
            <YoutubePlayer
                height={250}
                play={playing}
                videoId={"K1RjMVuiPbI"}
                onChangeState={onStateChange}
            />
            </View>
            <Texto>
            A Chave Teste é uma ferramenta muito prática, que deve fazer parte da sua caixa de ferramentas. Ela serve para identificar qual é o fio Fase (positivo) e qual é o fio Neutro no seu sistema elétrico.
            {"\n"}{"\n"}
            Mas você sabe como usá-la? O que significam os valores que aparecem no visor do modelo digital? Vamos te explicar! 
            {"\n"}{"\n"}
            Com cabo injetado em PVC transparente e haste em aço carbono, ela faz a medição entre 100V e 500V. Modo de usar:
            {"\n"}{"\n"}
            Coloque a ponta da chave em um dos buracos da tomada;
            Coloque o dedo na outra extremidade da chave;
            Se a lâmpada interna da chave acender é porque nesse buraco se encontra o fio Fase (positivo). Se não acender, significa que nesse buraco se encontra o fio Neutro.
            Obs.: Deve-se sempre manter o dedo na outra extremidade da chave, senão a lâmpada não irá acender.
            </Texto>
            <Title>
            Chave Teste Digital
            </Title>
            <BoxImagens>
            <Image
              style={styles.Img}
              source={require('../../../assets/chave-de-teste-digital.jpg')}
            />
            </BoxImagens>
            <Texto>
            Com cabo injetado de PVC preto e haste em aço carbono, ela faz a medição entre 12V e 220V, mesmo em fios encapados. Possui display em cristal líquido que indica, dentro das escalas pré-determinadas, as tensões detectadas. É indicada para medir tensão direta ou indireta de AC e DC e para realização de testes de aterramento e continuidade.
            </Texto>
            <Title>
            Medição Direta – Modo de usar:
            </Title>
            <Texto>
            1 – Encoste o dedo no contato da MEDIÇÃO DIRETA e a ponta metálica da chave teste no fio ou ponto de circuito que deseja medir;
            {"\n"}{"\n"}
2 – O símbolo de raio e o valor da tensão serão mostrados no display LCD;
{"\n"}{"\n"}
3 – Dentre os números que irão aparecer, a última indicação será o valor aproximado de tensão medido. Os números são faixas de Tensão: 12, 24, 36, 110, 220. Ex: Em uma tomada 127V, no display pode aparecer assim: 123655110, onde o último número – 110 – é a tensão correta no momento.
{"\n"}{"\n"}
Obs: Se o valor medido estiver 70% abaixo do valor esperado, o testador vai mostrar o valor aproximado na escala inferior da chave teste.
{"\n"}{"\n"}
– Para medições de tensão DC (pilhas e baterias), mantenha um dedo em contato com um dos pólos da bateria e a parte metálica da chave teste no outro pólo. O símbolo de raio aparecerá e o valor aproximado da tensão será indicado no display.
            </Texto>
            <Title>
            Medição Indireta ou Teste Indutivo – Modo de usar:
            </Title>
            <Texto>
            – Encoste o dedo no contato TESTE INDUTIVO e a ponta metálica da chave teste sobre os fios encapados;
            {"\n"}{"\n"}
– O aparecimento do símbolo de raio no display indica a existência de tensão ou de fase no fio e também continuidade.


            </Texto>
    </Container>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
      flex: 1,
      alignContent: 'center',
      margin: 15
    },
    text: {
      fontSize: 42,
    },
    ContainerBox: {
      paddingTop: 50,
      alignItems: "center",             
    },
    Img:{
      marginTop: 20,
      marginBottom: 20
    }
  });
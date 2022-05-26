import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';
import {Container, Title, Texto, Infors, Bolds} from '../Styles';

 function SalaEletrica({ navigation }) {
 return (
    <SafeAreaView style={styles.container}>
    <ScrollView style={styles.scrollView}>
      <Container>
          <Title>
            CONCEITOS DE 
            ELETRICIDADE
          </Title>
          <Texto>
          Eletricidade é o nome dado a um conjunto de fenômenos que ocorre graças ao desequilíbrio ou à movimentação das cargas elétricas, uma propriedade inerente aos prótons e elétrons, assim como também dos corpos eletricamente carregados. Na eletricidade, existem fenômenos eletrostáticos e eletrodinâmicos, relativos a cargas em repouso e em movimento, respectivamente.
          </Texto>
          <Title>
          Conceito de eletricidade
          </Title>
          <Texto>
          O conceito de eletricidade é abrangente, mas podemos compreendê-lo como todos os efeitos que as cargas elétricas produzem sobre a matéria. A eletricidade é comumente associada à corrente elétrica, uma movimentação de cargas que é estabelecida quando algum corpo é submetido a uma diferença de potencial elétrico.
          </Texto>
          <Title>
          Eletricidade na Física
          </Title>
          <Texto>
          A origem dos fenômenos elétricos está nos elétrons, que apresentam a menor carga elétrica possível, conhecida como carga fundamental, que vale cerca de 1,6.10-19 C. Quando excitados ou sob a ação de um campo elétrico externo, os elétrons podem ser conduzidos, dando origem a correntes elétricas e toda a gama de fenômenos relacionados à eletricidade.
          </Texto>
          <Texto>
          Na Física, é muito comum que o termo eletricidade seja empregado como a quantidade de energia consumida nos circuitos elétricos. Essa energia, também conhecida como energia potencial elétrica, pode ser calculada por meio da potência elétrica – a quantidade de energia elétrica que um dispositivo consome a cada segundo.

A energia potencial elétrica é medida em joules, ou em kWh, que é uma unidade mais comum, usada como o parâmetro pelas companhias de distribuição de energia elétrica. A energia contida em um kWh tem um valor econômico, que pode ser diferente em cada região, de acordo com as dificuldades técnicas da distribuição de energia ou ainda, com a demanda local. A energia contida em 1 kWh é igual a 3,6.106 J.
          </Texto>
          <Title>
          Fórmulas de eletricidade
          </Title>
          <Texto>
          Nesta seção, trazemos as principais fórmulas relacionadas à eletricidade, confira:

A corrente elétrica que atravessa um condutor pode ser calculado por meio da seguinte expressão:
          </Texto>
          <Image
              style={styles.Img}
              source={require('../../../assets/1.png')}
            />

          <Infors>
            i – corrente elétrica (A)
          </Infors>
          <Infors>
          ΔQ – carga elétrica (C)
          </Infors>
          <Infors>
          Δt – intervalo de tempo (s)
          </Infors>

          <Texto>
          A tensão elétrica ou potencial elétrico que uma carga produz a uma distância d, medida a partir de seu centro, é calculada por meio da fórmula:
          </Texto>
          <Image
              style={styles.Img}
              source={require('../../../assets/2.png')}
            />
          <Texto>
          U – potencial elétrico (V)
          </Texto>
          <Texto>
          k0 – constante eletrostática do vácuo (9.109 Nm²/C²)
          </Texto>
          <Texto>
          Q – carga elétrica (C)
          </Texto>
          <Texto>
          d – distância (m)
          </Texto>
          <Texto>

          </Texto>
          <Texto>
          O campo elétrico produzido por uma carga puntiforme é uma grandeza vetorial e pode ter seu módulo calculado pela fórmula a seguir:
          </Texto>
          <Image
              style={styles.Img}
              source={require('../../../assets/3.png')}
            />
          <Texto>
          E – campo elétrico (N/C)
          </Texto>

          <Texto>
          A força elétrica entre duas cargas puntiformes, separadas por uma distância d, é calculada pela fórmula a seguir
          </Texto>
          <Image
              style={styles.Img}
              source={require('../../../assets/4.png')}
            />
          <Texto>
          Q e q – cargas elétricas
          </Texto>
          <Texto>
          A<Bolds> relação entre o campo elétrico</Bolds> e a força elétrica descrita pela Lei de Coulomb é mostrada na expressão:
          </Texto>
          <Image
              style={styles.Img}
              source={require('../../../assets/5.png')}
            />
          <Texto>
          A<Bolds>energia potencial elétrica</Bolds>  proveniente da interação de cargas puntiformes separadas por uma distância d é calculada pela fórmula a seguir:
          </Texto>
          <Image
              style={styles.Img}
              source={require('../../../assets/6.png')}
            />
            <Texto>
            O <Bolds>potencial elétrico,</Bolds> escrito em termos da energia potencial elétrica, é definido por meio da fórmula a seguir:
            </Texto>
            <Image
              style={styles.Img}
              source={require('../../../assets/7.png')}
            />
            <Texto>
            A <Bolds>energia elétrica consumida</Bolds> por algum aparelho, de potência elétrica P, pode ser calculado por meio da fórmula abaixo:
            </Texto>
            <Image
              style={styles.Img}
              source={require('../../../assets/8.png')}
            />
            <Texto>
            EEL – energia elétrica consumida
            </Texto>
            <Texto>
            P – potência
            </Texto>
            <Texto>
            Δt – tempo
            </Texto>

            <Title>
            História da eletricidade
            </Title>
            <Texto>
            O primeiro relato documentado de uma observação de fenômenos elétricos é atribuída ao filósofo grego Tales de Mileto. Tales percebeu que, quando esfregado em tiras de couro, o âmbar (uma resina vegetal fóssil) tinha a capacidade de atrair pequenos objetos, como folhas secas. O âmbar, que em grego é chamado de elektron, deu nome à partícula que origina a maior parte dos fenômenos elétricos, o elétron.
            {"\n"}{"\n"}
            Confira uma breve linha do tempo com os principais acontecimentos que marcaram a história da eletricidade, após a descoberta de Tales de Mileto:
            {"\n"}{"\n"}
            1660 – Otto Van Guericke inventou uma máquina que produz cargas eletrostáticas por meio do atrito.
            {"\n"}{"\n"}
            1730 – Charles Francis Dufay descobriu que a eletricidade gerada pelo atrito pode ter duas classes distintas: as cargas positivas e as cargas negativas, conforme conhecemos atualmente.
            {"\n"}{"\n"}
            1744 – Benjamin Franklin utilizou um acumulador de cargas elétricas preso a um fio condutor que mantinha presa uma pipa, durante uma tempestade, constatando, assim, que os raios eram fenômenos elétricos.
            {"\n"}{"\n"}
            1780 – Luigi Galvani descobriu que a eletricidade pode mover os membros de animais mortos, sugerindo que os músculos contraem-se graças à passagem de cargas elétricas.
            {"\n"}{"\n"}
            1796 – Um grande número de discos de cobre e zinco foi empilhado sobre um pano embebido em solução ácida. Alessandro Volta havia inventado a primeira pilha.
            {"\n"}{"\n"}
            1820 – Hans Christin Oersted descobriu que a corrente elétrica é capaz de produzir campo magnético.
            {"\n"}{"\n"}
            1831 - Michael Faraday descobriu a indução eletromagnética.
            {"\n"}{"\n"}
            1827 – George Simon Ohm descobriu uma relação matemática entre resistência, tensão e corrente elétrica, hoje conhecida como a Primeira Lei de Ohm.
            {"\n"}{"\n"}
            1875 – O telefone foi inventado por Alexander Graham Bell
            {"\n"}{"\n"}
            1880 – Thomas Edison inventou a lâmpada.
            {"\n"}{"\n"}
            1886 – George Westhinghouse o primeiro sistema de distribuição de eletricidade por corrente alternada, inventado por Nikola Tesla.
            {"\n"}{"\n"}
            1890 – Nikola Tesla desenvolveu o sistema de distribuição de corrente elétrica trifásico.
            {"\n"}{"\n"}
            1905 – Albert Einstein explicou o funcionamento do efeito fotoelétrico, que permitiu o desenvolvimento dos painéis solares.
            {"\n"}{"\n"}
            1911 – Kamerlingh Onnes descobriu o fenômeno da supercondutividade, de grande importância para a geração de energia elétrica moderna.
            </Texto>
            <Title>
            Como surgiu a eletricidade
            </Title>
            <Texto>
            Assim como os demais fenômenos da natureza, a eletricidade sempre existiu, muito tempo antes de a humanidade surgir. Os raios, por exemplo, são os fenômenos elétricos que produziram a maior parte de todo o ozônio da atmosfera terrestre. Os raios têm origem em nuvens que eletrizam-se pelo atrito entre um grande número de cristais de gelo, ar e vapor de água, eventualmente, descarregando-se e fazendo com que uma grande corrente elétrica seja formada pelo ar, o que produz um grande clarão e estrondo, além de temperaturas da ordem de milhares de graus.
            {"\n"}{"\n"}
            As ligações químicas que formaram as primeiras moléculas de água do planeta Terra, por exemplo, são produto da atração elétrica entre cargas, descrita matematicamente pela Lei de Coulomb. Essa força fez com que diferentes elementos se combinassem, meramente pela compatibilidade de cargas elétricas, dando assim, origem à vida.
            {"\n"}{"\n"}
            A eletricidade como a conhecemos foi fruto de longas pesquisas e do trabalho incansável de um grande número de físicos, químicos, engenheiros e matemáticos que possibilitaram a produção, distribuição e o surgimento de máquinas e tecnologias cuja força motriz era a eletricidade, tornando-a assim, cada vez mais popular e acessível.
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

  

export default SalaEletrica;
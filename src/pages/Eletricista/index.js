import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import { Caixa, BoxContent, Content, ContentR, ContentL, Title, SubTitle, BoxTxt } from './styles';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <View style={styles.ContainerBox}>
        <View style={styles.BgTopo}>
        <Image style={styles.ImgTop}
                  source={require('../../../assets/bg-eletrica.jpg')} />
        </View>
        {/* Aula 00 */}
          <BoxContent onPress={() => navigation.navigate('SalaEletricista')}>
            <Content >
              <ContentL>
                <Image
                  style={styles.Img}
                  source={require('../../../assets/icone-eletrica-sala.png')}
                />
              </ContentL>
            </Content>  
            <Content>
              <ContentR>
                <BoxTxt>
                  <Title>
                    Aula 00
                  </Title>
                  <SubTitle>
                    Conceitos de eletricidade
                  </SubTitle>
                </BoxTxt>
              </ContentR>
            </Content>
          </BoxContent>
          
          {/* Aula 01 */}
          <BoxContent onPress={() => navigation.navigate('Eletrica01')}>
            <Content >
              <ContentL>
                <Image
                  style={styles.Img}
                  source={require('../../../assets/ferramentas.png')}
                />
              </ContentL>
            </Content>

            <Content>
              <ContentR>
                <BoxTxt>
                  <Title>
                    Aula 01
                  </Title>
                  <SubTitle>
                    Farramentas
                  </SubTitle>
                </BoxTxt>
              </ContentR>
            </Content>
          </BoxContent>

          {/* Aula 02 */}
          <BoxContent onPress={() => navigation.navigate('Eletrica')}>
            <Content >
              <ContentL>
                <Image
                  style={styles.Img}
                  source={require('../../../assets/tensao.png')}
                />
              </ContentL>
            </Content>

            <Content>
              <ContentR>
                <BoxTxt>
                  <Title>
                    Aula 02
                  </Title>
                  <SubTitle>
                    Tensão, Corrente, Resistência Elétrica e Potência
                  </SubTitle>
                </BoxTxt>
              </ContentR>
            </Content>
          </BoxContent>

         
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    alignContent: 'center',
  },
  text: {
    fontSize: 42,
  },
  ContainerBox: {
    
    alignItems: "center",
  },
  BgTopo:{
    width: "100%"
  },
  ImgTop:{
    width: "100%"
  }
});

export default HomeScreen;
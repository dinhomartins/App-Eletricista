import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image } from 'react-native';
import Header from '../components/Header';
import { Caixa, BoxContent, Content, ContentR, ContentL, Title, SubTitle, BoxTxt } from './styles';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Header />
        <View style={styles.ContainerBox}>
          {/* <Box />
              <Comando />
              <Condicionado /> */}
          <BoxContent onPress={() => navigation.navigate('Eletrica')}>
            <Content >
              <ContentL>
                <Image
                  style={styles.Img}
                  source={require('../../../assets/icon-eletrica.png')}
                />
              </ContentL>
            </Content>

            <Content>
              <ContentR>
                <BoxTxt>
                  <Title>
                    Eletricista
                  </Title>
                  <SubTitle>
                    Residencial predial
                  </SubTitle>
                </BoxTxt>
              </ContentR>
            </Content>
          </BoxContent>


          {/* Botao comando eletrico */}
          <BoxContent onPress={() => navigation.navigate('Eletrica')}>
            <Content >
              <ContentL>
                <Image
                  style={styles.Img}
                  source={require('../../../assets/icon-comando.png')}
                />
              </ContentL>
            </Content>

            <Content>
              <ContentR>
                <BoxTxt>
                  <Title>
                    Comando
                  </Title>
                  <SubTitle>
                    Elétrico
                  </SubTitle>
                </BoxTxt>
              </ContentR>
            </Content>
          </BoxContent>

          {/* Botao comando eletrico */}
          <BoxContent onPress={() => navigation.navigate('Eletrica')}>
            <Content >
              <ContentL>
                <Image
                  style={styles.Img}
                  source={require('../../../assets/icone-arcond.png')}
                />
              </ContentL>
            </Content>

            <Content>
              <ContentR>
                <BoxTxt>
                  <Title>
                    Ar Condicionado
                  </Title>
                  <SubTitle>
                    Instalação
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
    paddingTop: 50,
    alignItems: "center",
  }
});

export default HomeScreen;
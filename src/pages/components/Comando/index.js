import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {Container, BoxContent,Content,ContentR, ContentL, Title, SubTitle, BoxTxt} from './styles';


function Comando() {
 return (
  <Container>
  <BoxContent>
    <Content>
      <ContentL>
    <Image
      style={styles.Img}
      source={require('../../../../assets/icon-comando.png')}
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
      Eletrico
      </SubTitle>
      </BoxTxt>
      </ContentR>
    </Content>
  </BoxContent>
</Container>
  );
}

const styles = StyleSheet.create({
  
  Img: {
    width: 126,
    height: 126
  },
});


export default Comando;
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {Container, BoxContent, Content,ContentR, ContentL, Title, SubTitle, BoxTxt} from './styles';


function Arcondicionado() {
 return (
   <Container>
      <BoxContent>
        <Content>
          <ContentL>
        <Image
          style={styles.Img}
          source={require('../../../../assets/icone-arcond.png')}
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
            Instalação e manutenção
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
export default Arcondicionado;
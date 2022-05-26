import React from 'react';
import { View, Text } from 'react-native';
import {HeaderBox, Container, TxtIntro} from './styles';


export default function Header() {
 return (
   <View>
       <Container>
           <TxtIntro>Bem Vindo</TxtIntro>
       </Container>
   </View>
  );
}
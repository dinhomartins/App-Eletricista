import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/pages/Home';
import Eletrica from './src/pages/Eletricista';
import SalaEletricista from './src/pages/SalaDeAula';
import Eletrica01 from './src/pages/SalaEletrica01';

const Stack = createNativeStackNavigator();







export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          title: 'M T D',
          headerStyle:{
            backgroundColor: '#0046a8'
          },
          headerTintColor: '#fff',
          // Tirar header
          headerShown: false
        }}
        />
        <Stack.Screen 
        name="Eletrica" 
        component={Eletrica} 
        options={{
          title: 'Eletricista Residencial e Predial',
          headerStyle:{
            backgroundColor: '#F0C48A'
          },
          // cor do header
          headerTintColor: '#fff',
          // Tirar header
        }}
        />
        <Stack.Screen 
        name="SalaEletricista" 
        component={SalaEletricista} 
        options={{
          title: 'Sala de aula eletrica',
          headerStyle:{
            backgroundColor: '#F0C48A'
          },
          // cor do header
          headerTintColor: '#fff',
          // Tirar header
        }}
        />
        <Stack.Screen 
        name="Eletrica01" 
        component={Eletrica01} 
        options={{
          title: 'Sala de aula eletrica',
          headerStyle:{
            backgroundColor: '#F0C48A'
          },
          // cor do header
          headerTintColor: '#fff',
          // Tirar header
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

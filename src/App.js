import React from 'react';
import {Text, View, Image, SafeAreaView, TextInput} from 'react-native';
import {Container, Titulo, Lock, Input} from './styled';
const App = () => {
  return (
    <SafeAreaView>
      <Container>
        <Titulo>Gerador de Senhas</Titulo>
        <Lock
          source={{
            uri: 'https://static.thenounproject.com/png/3309848-200.png',
          }}
        />
        <Input placeholder="useless placeholder" keyboardType="numeric" />
      </Container>
    </SafeAreaView>
  );
};

export default App;

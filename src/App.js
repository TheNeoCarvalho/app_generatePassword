import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Container, Titulo, Lock, Input, Button, ButtonText} from './styled';
const App = () => {
  const [hash, setHash] = useState('');

  function gen() {
    const chars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-+';
    const passwordLenght = hash;
    let password = '';
    for (let i = 0; i < passwordLenght; i++) {
      let generated = Math.floor(Math.random() * chars.length);
      password += chars.substring(generated, generated + 1);
    }
    setHash(password);
  }

  return (
    <Container>
      <Titulo>Gerador de Senhas</Titulo>
      <Lock
        source={{
          uri: 'https://static.thenounproject.com/png/3309848-200.png',
        }}
      />
      <Input
        placeholder="Tamanho da senha a ser gerada"
        keyboardType="numeric"
        onChangeText={e => setHash(e)}
        value={hash}
      />
      <Button onPress={gen}>
        <ButtonText>Gerar Senha</ButtonText>
      </Button>
    </Container>
  );
};

export default App;

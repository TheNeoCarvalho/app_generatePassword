import React, {useState, useEffect} from 'react';
import {Clipboard, AsyncStorage, Text} from 'react-native';
import {Container, Titulo, Lock, Input, Button, ButtonText} from './styled';
const App = () => {
  const [app, setApp] = useState('');
  const [hash, setHash] = useState('');
  const [apps, setApps] = useState([
    {app: 'App1', pass: '98787guy'},
    {app: 'App2', pass: '9aSDA87guy'},
  ]);

  async function gen() {
    const chars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-+';

    let password = '';

    for (let i = 0; i < hash; i++) {
      let generated = Math.floor(Math.random() * chars.length);
      password += chars.substring(generated, generated + 1);
    }
    setHash(password);
    // Clipboard.setString(password);
    // alert('Senha copiada para área de transferência');

    const data = {
      app,
      pass: password,
    };

    // try {
    const values = await AsyncStorage.getItem('@MyApps');
    const datas = [...values, data];

    await AsyncStorage.setItem('@MyApps', JSON.stringify(datas));
    setApps(datas);
    // alert('App/Senha adicionados');
    // } catch (error) {
    //   alert('Erro ao salvar');
    // }
  }

  const retrieveData = async () => {
    console.disableYellowBox = true;
    try {
      const value = await AsyncStorage.getItem('@MyApps');
      if (value !== null) {
        setApps(JSON.parse(value));
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <Container>
      <Titulo>Gerador de Senhas</Titulo>
      <Lock
        source={{
          uri: 'https://static.thenounproject.com/png/3309848-200.png',
        }}
      />
      <Input
        placeholder="Rede Social/Site"
        keyboardType="numeric"
        onChangeText={e => setApp(e)}
        value={app}
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
      <Titulo>Apps</Titulo>
      <Text />
    </Container>
  );
};

export default App;

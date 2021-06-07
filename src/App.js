import React, {useState, useEffect} from 'react';
import {Clipboard, Keyboard} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Container,
  Titulo,
  Lock,
  Input,
  Button,
  ButtonText,
  Tapps,
  Apps,
} from './styled';
const App = () => {
  const [app, setApp] = useState('');
  const [hash, setHash] = useState('');
  const [apps, setApps] = useState([]);

  async function gen() {
    const chars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-+';

    let password = '';

    for (let i = 0; i < hash; i++) {
      let generated = Math.floor(Math.random() * chars.length);
      password += chars.substring(generated, generated + 1);
    }
    setHash(password);
    Clipboard.setString(password);
    alert('Senha copiada para área de transferência');

    const data = {
      app,
      pass: password,
    };

    const datas = [...apps, data];
    const obj = JSON.stringify(datas);
    await AsyncStorage.setItem('MyApps', obj);
    setApps(datas);
    Keyboard.dismiss();
  }

  const retrieveData = async () => {
    console.disableYellowBox = true;
    try {
      const values = await AsyncStorage.getItem('MyApps');
      if (values) {
        setApps(JSON.parse(values));
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, [apps]);

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
      <Tapps>Meus Apps</Tapps>
      {apps.map(a => (
        <Apps>{a.app}</Apps>
      ))}
    </Container>
  );
};

export default App;

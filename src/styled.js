import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Titulo = styled.Text`
  font-size: 42px;
  margin-top: 20px;
`;

export const Tapps = styled.Text`
  font-size: 24px;
  margin-top: 20px;
`;

export const Apps = styled.Text`
  font-size: 18px;
  margin-top: 20px;
`;

export const Lock = styled.Image`
  width: 180px;
  height: 180px;
  margin-top: 10px;
`;
export const Input = styled.TextInput`
  font-size: 18px;
  width: 90%;
  height: 50px;
  padding: 2px 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 50px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  background-color: #222;
  margin-top: 10px;
  padding: 10px;
  width: 90%;
  border-radius: 50px;
`;

export const ButtonText = styled.Text`
  font-size: 22px;
  color: #fff;
  text-align: center;
`;

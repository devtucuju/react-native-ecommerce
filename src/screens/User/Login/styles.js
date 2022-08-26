import styled from "styled-components/native";

import Responsive from 'react-native-lightweight-responsive';

export const Container = styled.View`
flex:1;
justify-content:center;
align-items: center;
background-color: ${({theme})=> theme.colors.background};
`;

export const Title = styled.Text`
font-size: Responsive.font(26);
font-weight: bold;
color: #35424a;
`;
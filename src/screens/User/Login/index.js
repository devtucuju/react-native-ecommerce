import React from "react";
import {View,Text, StyleSheet} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 

import Responsive from 'react-native-lightweight-responsive';

import { Button } from "../../../components/Forms/Button";
import { SocialButton } from "../../../components/Forms/SocialButton";
import { Input } from "../../../components/Forms/Input";

import theme from "../../../globals/styles/theme"

export function Login (){
return (
    <View style={styles.container}>
        <FontAwesome5 name="cloud" size={Responsive.font(64)} color="linear-gradient(to right, rgb(234, 241, 247) 0%, rgb(242, 242, 242) 1.5887964551693925%, rgb(204, 213, 222) 100%)"/>
        <Text style={[styles.subTitle,
            {fontSize:Responsive.font(16),
            fontWeight:"600",letterSpacing:Responsive.font(1),
            paddingBottom:Responsive.font(30)
            }]}>O MarketPlace</Text>
        <Text style={styles.title}>Entrar</Text>
        <View style={styles.form}>
        <Text style={styles.inputTitle}>Email</Text>
     <Input
     placeholder="exemple@email.com"
     />
      <Text style={styles.inputTitle}>Password</Text>
      <Input
   
     />
     <Button title="Entrar"/>
     <View style={[{alignItems:"center"}]}>
     <Text style={styles.subTitle}>ou acesse com suas redes sociais</Text>
     </View>
     
     <View style={styles.social}>
     <SocialButton name="twitter"  title="Twitter" />
     <SocialButton name="facebook" title="Facebook" btnColor="#3b5998" />
     </View>
     <View style={styles.social}>
     <Text style={styles.subTitle}>Não tem conta?</Text>
     <Text style={styles.inputTitle}>Criar conta</Text>
     </View>
     </View>
     
    
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,

alignItems: "center",
justifyContent :"center",


    },
title:{
    fontSize:Responsive.font(26),
    color:theme.colors.title,
    fontWeight:"bold"
 

},
subTitle:{
    fontSize:Responsive.font(14),
    color:theme.colors.subtitle,
   
 

},
inputTitle:{
    fontSize:Responsive.font(14),
    color:theme.colors.primary,
    fontWeight:"bold"
    ,
},
form:{
    
    width: "100%",
    justifyContent :"center",

    padding: Responsive.font(24)
},
social:{
  
    flexDirection:"row",
    justifyContent :"space-between",
 
}
}
)
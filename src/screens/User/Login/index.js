import React from "react";
import {View,Text, StyleSheet} from "react-native";
import Responsive from 'react-native-lightweight-responsive';

import { Button } from "../../../components/Forms/Button";
import { SocialButton } from "../../../components/Forms/SocialButton";
import { Input } from "../../../components/Forms/Input";

import theme from "../../../globals/styles/theme"

export function Login (){
return (
    <View style={styles.container}>
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
     <View style={styles.social}>
     <Text style={styles.subTitle}>ou acesse com suas redes sociais</Text>
     </View>
     
     <View style={styles.social}>
     <SocialButton title="Twitter"/>
     <SocialButton title="Facebook"/>
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
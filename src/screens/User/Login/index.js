import React from "react";
import {View,Text, StyleSheet} from "react-native";
import Responsive from 'react-native-lightweight-responsive';
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
     </View>
    </View>
)
}

const styles = StyleSheet.create({
    container:{
        flex:1,
justifyContent :"center",
alignItems: "center",


    },
title:{
    fontSize:Responsive.font(26),
    color:theme.colors.title,
 

},
inputTitle:{
    fontSize:Responsive.font(14),
    color:theme.colors.primary
    ,
},
form:{
    flex: 1,
    width: "100%",
    justifyContent :"center",
    padding: Responsive.font(24)
}
}
)
import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AssetExample from './components/AssetExample';
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
     <AssetExample/>
      <TouchableOpacity style={styles.loginMail}>
        <Image style={styles.outlook} source={require('./assets/outlookico.png')} />
        <Text style={styles.textBtn}>Entre com seu E-mail de Estudante</Text>
      </TouchableOpacity>
      <SafeAreaView style={styles.ouContainer}>
        <Text style={styles.ouLogin}>━━━━━━━━━━━━━</Text>
        <Text style={styles.ouLogin}>Ou</Text>
        <Text style={styles.ouLogin}>━━━━━━━━━━━━━━━</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.containerInput}>
        <Text style={styles.label}>Matrícula:</Text>
        <TextInput 
          
          onChangeText={handleChangeInput}
          placeholder="Digite Sua Matrícula" 
          style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.labelLink}>Esqueci minha Matrícula</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Senha:</Text>
        <TextInput  
          value={inputSenha}
          onChangeText={handleChangeInput}
          secureTextEntry={true} 
          placeholder="Digite Sua Senha" 
          style={styles.input} 
        />
        <TouchableOpacity>
          <Text style={styles.labelLink}>Esqueci minha Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btn, { backgroundColor: isDisabled ? 'gray' : 'green' }]}
          disabled={isDisabled}
        >
          <Text style={styles.textBtn}>Entrar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:"center"
  },
  input: {
    display:'flex',
    flex:1,
    color: "gray",
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 12,
    fontSize: 12,
  },
  label: {
    fontSize: 18,
    color: "gray",
  },
  labelLink: {
    color: "#089BCC",
    textAlign: "right",
  },
  btn: {
    marginTop: 12,
    padding: 12,
    backgroundColor: "green",
    borderRadius: 5,
  },
  textBtn: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
  loginMail: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 12,
    margin: 5,
    backgroundColor: "#089BCC",
    fontWeight: "bold",
    color: "white",
    alignItems: 'center',
  },
  outlook: {
    marginRight: 5,
    width: 30,
    height: 30,
  },
  ouContainer: {
    flexDirection: "row",
    wordWrap: "break-word",
  },
  ouLogin: {
    fontWeight: "bold",
    color: "gray",
  },
});

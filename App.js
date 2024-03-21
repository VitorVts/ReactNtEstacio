import React, { useState } from "react";
import { Text, TextInput, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AssetExample from './components/AssetExample';
import { useFonts } from 'expo-font';
export default function App() {
  const [inputUsuario, setInputUsuario] = useState("");
  const [inputSenha, setInputSenha] = useState("");

  const handleChangeInputUsuario = (text) => {
    setInputUsuario(text);
  };

  const handleChangeInputSenha = (text) => {
    setInputSenha(text);
  };

  

  const isDisabled = !inputUsuario || !inputSenha;

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
          value={inputUsuario}
          onChangeText={handleChangeInputUsuario}
          placeholder="Digite Sua Matrícula" 
          style={styles.input}
        />
        <TouchableOpacity>
          <Text style={styles.labelLink}>Esqueci minha Matrícula</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Senha:</Text>
        <TextInput  
          value={inputSenha}
          onChangeText={handleChangeInputSenha}
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
    width:"40vh"
  },
  label: {
    fontSize: 18,
    color: "gray",
  },
  labelLink: {
    color: "#089BCC",
    textAlign: "end",
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
  },
  loginMail: {
    flexDirection: "row",
    borderRadius: 5,
    padding: 12,
    margin: 5,
    backgroundColor: "#089BCC",
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
    color: "gray",
  },
});

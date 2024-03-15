import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Image resizeMode="contain" style={styles.logo} source={require('../assets/estacio.png')} />
      <Text style={styles.logoText}>
        SIA - Sistema de Informações Acadêmicas Quinta, 14 de março de 2024
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    flex:1,
    width:"90%",

    padding:"20px"
    },
  logoText: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 10,
    width:"30vh"
  },
});

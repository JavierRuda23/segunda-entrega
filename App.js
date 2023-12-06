import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { BotonInicio } from '../src/components/Buttons';




export default function App() {


  return (
    <View style={styles.container}>
      <Text style= {styles.titulo}>Hola</Text>
      <Text style= {styles.subtitulo}>Ingresa tu usuario y contraseña para continuar</Text>
      <TextInput 
        placeholder='E-mail@gmail.com'
        style={styles.textInput}
      />
            <TextInput 
        placeholder='Tu contraseña'
        style={styles.textInput}
      />
      
      <StatusBar style="auto" />
      <BotonInicio />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    fontSize: 60,
    color: "#000",
    fontWeight: "bold",
    
  },
  subtitulo:{
    fontSize: 15,
    color: "gray",
  },
  textInput:{
    padding: 10,
    paddingStart: 30,
    height: 50,
    width: "80%",
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: "white"

  }

});

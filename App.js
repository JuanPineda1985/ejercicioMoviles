import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
 StyleSheet,
 Text,
 TextInput,
 TouchableOpacity,
 View
} from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {momento1:0,momento2:0,momento3:0, resultado:"",resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }
  calcular(){
   let prom = (this.state.momento1 + this.state.momento2+ this.state.momento3) * 0.01
   let s = this.state
   s.resultado = prom
   if(s.resultado < 1){
     s.resultadoText ='No es Competente'
   }
    else if (s.resultado < 2){
     s.resultadoText ='No es Competente'
    }
    else if (s.resultado < 3){
     s.resultadoText ='No es Competente'
    }
    else if (s.resultado > 3.5) {
     s.resultadoText ='competente'
    }
    else if (s.resultado > 4) {
     s.resultadoText ='Competente'
    }
    else if (s.resultado > 4.5) {
     s.resultadoText ='Competente'
    }
    else{
      s.resultadoText ='Competente'
    }
   this.setState(s)



  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entrada}>
          <TextInput autoCapitalize="none" placeholder="Momento 1" keyboardType="numeric" style={styles.input} onChangeText={(momento1)=>{this.setState({momento1})}}/>
          <TextInput autoCapitalize="none" placeholder="Momento 2" keyboardType="numeric" style={styles.input} onChangeText={(momento2)=>{this.setState({momento2})}}/>
          <TextInput autoCapitalize="none" placeholder="Momento 3"  keyboardType="numeric" style={styles.input} onChangeText={(momento3)=>{this.setState({momento3})}}/>
        </View>
        <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttontext}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado}</Text>
        <Text style={[styles.resultado,{fontSize:20}]}>{this.state.resultadoText}</Text>

    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  entrada:{
    flexDirection:'row',
  },
  input:{
    height:80,
    textAlign:"center",
    width:"50%",
    fontSize:50,
    marginTop:34,
  },
  button:{
   backgroundColor:"#2C2523",
  },
  buttontext:{
    textAlign:"center",
    padding:30,
    fontSize:25,
    fontWeight:'bold',
    color:"white",
  },
  resultado:{
    alignSelf:"center",
    color:"lightgray",
    fontSize:45,
    fontWeight:'bold',
    padding: 6,
  },
});
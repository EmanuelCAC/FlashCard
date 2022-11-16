import React, { Component } from 'react';
import { Checkbox, Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default class FlashCard extends Component {

  constructor(props){
    super(props);
    this.state = {x:Math.floor(Math.random() * 9) + 1, resposta:'', questões:[
      {pergunta:'1', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'e)'},
      {pergunta:'2', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'a)'},
      {pergunta:'3', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'b)'},
      {pergunta:'4', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'c)'},
      {pergunta:'5', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'d)'},
      {pergunta:'6', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'e)'},
      {pergunta:'7', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'a)'},
      {pergunta:'8', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'e)'},
      {pergunta:'9', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'e)'},
      {pergunta:'10', a:'a)', b:'b)', c:'c)', d:'d)', e:'e)', correta:'e)'}
    ]}

    this.escolhaA = this.escolhaA.bind(this)
    this.escolhaB = this.escolhaB.bind(this)
    this.escolhaC = this.escolhaC.bind(this)
    this.escolhaD = this.escolhaD.bind(this)
    this.escolhaE = this.escolhaE.bind(this)
    this.proxima = this.proxima.bind(this)
  }

  proxima() {
    let s = this.state

    if (s.resposta != ''){
      s.x = Math.floor(Math.random() * 9) + 1
      s.resposta = ''
    }

    this.setState(s)
  }

  escolhaA() {
    let s = this.state

    if (s.questões[this.state.x].a == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }

  escolhaB() {
    let s = this.state

    if (s.questões[this.state.x].b == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }

  escolhaC() {
    let s = this.state

    if (s.questões[this.state.x].c == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }

  escolhaD() {
    let s = this.state

    if (s.questões[this.state.x].d == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }

  escolhaE() {
    let s = this.state

    if (s.questões[this.state.x].e == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }
           
  render() {
    return(
      <View style={styles.body}>
        <TouchableOpacity onPress={this.proxima}>
          <View style={styles.card}>
            <View style={styles.pergunta}>
              <Text style={styles.t_pergunta}>{this.state.questões[this.state.x].pergunta}</Text>
            </View>
            <View style={styles.alternativas}>
              <TouchableOpacity style={styles.t_alternativa} onPress={this.escolhaA}>
                <Text>{this.state.questões[this.state.x].a}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.t_alternativa} onPress={this.escolhaB}>
                <Text>{this.state.questões[this.state.x].b}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.t_alternativa} onPress={this.escolhaC}>
                <Text>{this.state.questões[this.state.x].c}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.t_alternativa} onPress={this.escolhaD}>
                <Text>{this.state.questões[this.state.x].d}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.t_alternativa} onPress={this.escolhaE}> 
                <Text>{this.state.questões[this.state.x].e}</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Text>{this.state.resposta}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  body:{
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  card:{
    width:1000,
    height:600,
    backgroundColor:'wheat',
    justifyContent:'center',
    alignItems:'center',
  },
  t_pergunta:{
    fontFamily: 'Arial',
    fontSize:25,
  },
  alternativas:{

  },
  t_alternativa:{
    backgroundColor:'tranparent'
  }
})


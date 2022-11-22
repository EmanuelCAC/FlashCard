import React, { Component } from 'react';
import { Checkbox, Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

export default class FlashCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      // A variavel x serve de index para a lista questões. É utilizado ua variavel Math.random para gerar um numero aleatório de 0 a 1 que é multiplicado por 4.9
      // e depois é arredodado para baixo pelo método Math.floor,fazendo com que o numero gerado no final seja de 0 a 4
      x: Math.floor(Math.random() * 4.9),

      // Essa variavel guarda a alternativa escolhida
      resposta:'',

      //É uma listaque guarda todas as peguntas, alternativas e respostas corretas
      questões:[
      {pergunta:'1) Um automóvel apresenta um desempenho médio de 16 km/L. Um engenheiro desenvolveu um novo motor a combustão que economiza, em relação ao consumo do motor anterior, 0,1 L de combustível a cada 20 km percorridos. O valor do desempenho médio do automóvel com o novo motor, em quilômetro por litro, expresso com uma casa decimal, é',
      a:'a) 15,9',
      b:'b) 16,1',
      c:'c) 16,4',
      d:'d) 17,4',
      e:'e) 18,0',
      correta:'d) 17,4'},

      {pergunta:'2) Durante o desenvolvimento embrionário humano ocorre uma comunicação entre os átrios direito e esquerdo através do forame oval (ou forame de Botal). Essa comunicação não causa prejuízos à circulação do bebê em formação, exceto se ela perdurar após o nascimento. Os prejuízos no período embrionário são evitados porque a circulação fetal se assemelha à dos(as)',
      a:'a) aves, porque a pequena circulação e a grande circulação estão presentes.',
      b:'b) répteis, porque a mistura de sangue é minimizada por um metabolismo lento.', 
      c:'c) crocodilianos, porque a separação dos ventrículos impede a mistura sanguínea.',
      d:'d) peixes, porque a circulação é simples, ocorrendo uma passagem única pelo coração.',
      e:'e) anfíbios, porque pressões diferenciais isolam temporalmente o sangue venoso do arterial.',
      correta:'d) peixes, porque a circulação é simples, ocorrendo uma passagem única pelo coração.'},

      {pergunta:'3) Os compostos iônicos CaCO3 e NaCl têm solubilidades muito diferentes em água. Enquanto o carbonato de cálcio, principal constituinte do mármore, é praticamente insolúvel em água, o sal de cozinha é muito solúvel. A solubilidade de qualquer sal é o resultado do balanço entre a energia de rede (energia necessária para separar completamente os íons do sólido cristalino) e a energia envolvida na hidratação dos íons dispersos em solução.Em relação à energia de rede, a menor solubilidade do primeiro composto é explicada pelo fato de ele apresentar maior.',
      a:'a) atração entre seus íons.',
      b:'b) densidade do sólido iônico.',
      c:'c) energia de ionização do cálcio.',
      d:'d) eletronegatividade dos átomos.',
      e:'e) polarizabilidade do íon carbonato.',
      correta:'a) atração entre seus íons.'},

      {pergunta:'4) No manual de instruções de um conjunto de 30 lâmpadas idênticas, usadas para enfeite, está especificado que o conjunto deve ser ligado em uma rede elétrica de 120 V resultando em uma corrente total de 4,5 A. No entanto, o manual não informa a potência nominal de cada lâmpada para a aquisição de lâmpadas individuais de reposição em caso de queima. Depois de ligar o conjunto, percebe-se que, ao retirar qualquer lâmpada, um terço das demais não acende. Qual a potência nominal de cada lâmpada?',
      a:'a) 4W',
      b:'b) 18W',
      c:'c) 55W',
      d:'d) 180W',
      e:'e) 540W',
      correta:'b) 18W'},

      {pergunta:'5) A produção de um ou dois cultivos de exportação transformou-se em regra em 1935: cacau na Costa do Ouro, amendoim no Senegal e em Gâmbia, algodão no Sudão, café e algodão em Uganda, café e sisal na Tanzânia etc. O trabalho forçado e o abandono da produção alimentar provocaram muita desnutrição, graves surtos de fome e epidemias, em certas partes da África, no início da Era Colonial. BOAHEN, A. A. O legado do Colonialismo. Correio da Unesco, n. 7, jul. 1984 (adaptado).', 
      a:'a) Desconcentração da estrutura fundiária.', 
      b:'b) Expropriação de direitos humanitários.', 
      c:'c) Autossuficiência do mercado interno.', 
      d:'d) Valorização de técnicas ancestrais.', 
      e:'e)  Autonomia do setor financeiro.', 
      correta:'b) Expropriação de direitos humanitários.'},
    ]}

    //É nessessário para que as funções possam alterar a state
    this.escolhaA = this.escolhaA.bind(this)
    this.escolhaB = this.escolhaB.bind(this)
    this.escolhaC = this.escolhaC.bind(this)
    this.escolhaD = this.escolhaD.bind(this)
    this.escolhaE = this.escolhaE.bind(this)
    this.proxima = this.proxima.bind(this)
  }


  // Essa função serve para mudar a questão
  proxima() {
    let s = this.state

    // O if impede que você mude de questão sem responder
    if (s.resposta != ''){

      //É gerado outro numero de 0 a 4 para o x
      s.x = Math.floor(Math.random() * 4.9)

      //O valor de resposta volta a ser vazio
      s.resposta = ''
    }

    //Atualiza as mudanças feitas nas variaveis
    this.setState(s)
  }

  //Essa função acontece se a alternativa A for escolhida
  escolhaA() {
    let s = this.state

    //confere se a alternativa que você escolheu é a correta
    if (s.questões[this.state.x].a == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }

  //Essa função acontece se a alternativa B for escolhida
  escolhaB() {
    let s = this.state

    if (s.questões[this.state.x].b == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }

  //Essa função acontece se a alternativa C for escolhida
  escolhaC() {
    let s = this.state

    if (s.questões[this.state.x].c == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }


  //Essa função acontece se a alternativa D for escolhida
  escolhaD() {
    let s = this.state

    if (s.questões[this.state.x].d == s.questões[this.state.x].correta) {
      s.resposta = 'Correto!'
    } else {
      s.resposta = 'Errado! A resposta correta é: ' + s.questões[this.state.x].correta
    }

    this.setState(s)
  }

  //Essa função acontece se a alternativa E for escolhida
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
      //A primeira view se refere a página em geral
      <View style={styles.body}>

        {/*Imagem do cartão do fundo*/}
        <Image style={styles.cartao} source={require('./img/card.jpg')}/> 

        {/*Botão que engloba todo o catão e é respnsavel por mudar de questão*/}
        <TouchableOpacity onPress={this.proxima}>
          <View style={styles.card}>

            {/*A pergunta da questão*/}
            <View style={styles.pergunta}>
              <Text style={styles.t_pergunta}>{this.state.questões[this.state.x].pergunta}</Text>
            </View>

            {/*Altarnativas*/}
            <View style={styles.alternativas}>

              {/*Cada alternativa é um botão (TouchableOpacity)*/}
              <TouchableOpacity onPress={this.escolhaA}>
                <Text style={styles.t_alternativa}>{this.state.questões[this.state.x].a}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.escolhaB}>
                <Text style={styles.t_alternativa}>{this.state.questões[this.state.x].b}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.escolhaC}>
                <Text style={styles.t_alternativa}>{this.state.questões[this.state.x].c}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.escolhaD}>
                <Text style={styles.t_alternativa}>{this.state.questões[this.state.x].d}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.escolhaE}> 
                <Text style={styles.t_alternativa}>{this.state.questões[this.state.x].e}</Text>
              </TouchableOpacity>
            </View>
            <View>
              {/*Responsavel por apresentar a resposta*/}
              <Text style={styles.resposta}>Resposta: {this.state.resposta}</Text>
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
    backgroundColor: 'lightblue'
  },
  card:{
    width:800,
    height:450,
    paddingLeft:120,
    marginTop: 10,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgba(0, 0, 0, 0.02);'
  },
  pergunta:{
    width:650,
  },
  t_pergunta:{
    fontFamily: 'Arial',
    fontSize:18,
    fontWeight: 'bold'
  },
  alternativas:{
    paddingTop: 15,
  },
  t_alternativa:{
    backgroundColor:'tranparent',
    fontSize: 16,
    fontWeight: '600'
  },
  resposta:{
    fontSize: 16,
    fontWeight: '600'
  },
  cartao:{
    width: 800,
    height: 450,
    marginBottom: -460,
  }
})


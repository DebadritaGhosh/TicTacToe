import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {Entypo} from '@expo/vector-icons';

let itemArray = new Array(9).fill('nothing');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isX: false,
      winMsg: '',
      flag: true,
    };
  }
  drawSymbol = (itemNumber) => {
    if(this.state.flag === true){
    if (itemArray[itemNumber] === 'nothing') {
      itemArray[itemNumber] = this.state.isX;
      this.setState({isX: !itemArray[itemNumber]});
    }}
    this.winGameLogic();
  };
  selectSymbol = (itemNumber) => {
    if (itemArray[itemNumber] !== 'nothing') {
      return itemArray[itemNumber] ? 'cross' : 'circle';
    }
    return 'emoji-flirt';
  };
  selectSymbolColor = (itemNumber) => {
    if (itemArray[itemNumber] !== 'nothing') {
      return itemArray[itemNumber] ? 'red' : 'green';
    }
    return 'black';
  };
  resetGame = () => {
    itemArray.fill('nothing');
    this.setState({winMsg: ''});
    this.setState({flag: true});
    this.forceUpdate();
  };
  winGameLogic = () => {
    if (
      itemArray[0] !== 'nothing' && 
      itemArray[0] == itemArray[1] &&
      itemArray[1] == itemArray[2]
    ) {
      this.setState({
        winMsg: (itemArray[0] ? 'Cross' : 'Circle').concat(' Win')
      });
      this.setState({
        flag: false
      });
    } else if (
      itemArray[3] !== 'nothing' &&
      itemArray[3] == itemArray[4] &&
      itemArray[4] == itemArray[5]
    ) {
      this.setState({
        winMsg: (itemArray[3] ? 'Cross' : 'Circle').concat(' Win'),
      });
      this.setState({
        flag: false
      });
    } else if (
      itemArray[6] !== 'nothing' &&
      itemArray[6] == itemArray[7] &&
      itemArray[7] == itemArray[8]
    ) {
      this.setState({
        winMsg: (itemArray[6] ? 'Cross' : 'Circle').concat(' Win'),
      });
      this.setState({
        flag: false
      });
    } else if (
      itemArray[0] !== 'nothing' &&
      itemArray[0] == itemArray[3] &&
      itemArray[3] == itemArray[6]
    ) {
      this.setState({
        winMsg: (itemArray[0] ? 'Cross' : 'Circle').concat(' Win'),
      });
      this.setState({
        flag: false
      });
    } else if (
      itemArray[1] !== 'nothing' &&
      itemArray[1] == itemArray[4] &&
      itemArray[4] == itemArray[7]
    ) {
      this.setState({
        winMsg: (itemArray[1] ? 'Cross' : 'Circle').concat(' Win'),
      });
      this.setState({
        flag: false
      });
    } else if (
      itemArray[2] !== 'nothing' &&
      itemArray[2] == itemArray[5] &&
      itemArray[5] == itemArray[8]
    ) {
      this.setState({
        winMsg: (itemArray[2] ? 'Cross' : 'Circle').concat(' Win'),
      });
      this.setState({
        flag: false
      });
    } else if (
      itemArray[0] !== 'nothing' &&
      itemArray[0] == itemArray[4] &&
      itemArray[4] == itemArray[8]
    ) {
      this.setState({
        winMsg: (itemArray[0] ? 'Cross' : 'Circle').concat(' Win'),
      });
      this.setState({
        flag: false
      });
    } else if (
      itemArray[2] !== 'nothing' &&
      itemArray[2] == itemArray[4] &&
      itemArray[4] == itemArray[6]
    ) {
      this.setState({
        winMsg: (itemArray[2] ? 'Cross' : 'Circle').concat(' Win'),
      });
      this.setState({
        flag: false
      });
    }
    else if (
      itemArray[0] !== 'nothing' &&
      itemArray[1] !== 'nothing' &&
      itemArray[2] !== 'nothing' &&
      itemArray[3] !== 'nothing' &&
      itemArray[4] !== 'nothing' &&
      itemArray[5] !== 'nothing' &&
      itemArray[6] !== 'nothing' &&
      itemArray[7] !== 'nothing' &&
      itemArray[8] !== 'nothing'
    ) {
      this.setState({
        winMsg: 'Draw',
      });
    }
  };
  render() {
    return (
      <View style={Styles.container}>
      <Text style={Styles.title}>TicTacToe</Text>
        <View style={Styles.grid}>
          <View style={Styles.cell}>
          <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(0)} >
              <Entypo 
              name={this.selectSymbol(0)} 
              size = {50} 
              color={this.selectSymbolColor(0)}/>
            </TouchableOpacity>
            </View>
            <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(1)} >
              <Entypo 
              name={this.selectSymbol(1)} 
              size = {50} 
              color={this.selectSymbolColor(1)}/>
            </TouchableOpacity>
            </View>
            <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(2)} >
              <Entypo 
              name={this.selectSymbol(2)} 
              size = {50} 
              color={this.selectSymbolColor(2)}/>
            </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.cell}>
          <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(3)} >
              <Entypo 
              name={this.selectSymbol(3)} 
              size = {50} 
              color={this.selectSymbolColor(3)}/>
            </TouchableOpacity>
            </View>
            <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(4)} >
              <Entypo 
              name={this.selectSymbol(4)} 
              size = {50} 
              color={this.selectSymbolColor(4)}/>
            </TouchableOpacity>
            </View>
            <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(5)} >
              <Entypo 
              name={this.selectSymbol(5)} 
              size = {50} 
              color={this.selectSymbolColor(5)}/>
            </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.cell}>
          <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(6)} >
              <Entypo 
              name={this.selectSymbol(6)} 
              size = {50} 
              color={this.selectSymbolColor(6)}/>
            </TouchableOpacity>
            </View>
            <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(7)} >
              <Entypo 
              name={this.selectSymbol(7)} 
              size = {50} 
              color={this.selectSymbolColor(7)}/>
            </TouchableOpacity>
            </View>
            <View style={Styles.item}>
            <TouchableOpacity onPress={()=>this.drawSymbol(8)} >
              <Entypo 
              name={this.selectSymbol(8)} 
              size = {50} 
              color={this.selectSymbolColor(8)}/>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style={Styles.res}> {this.state.winMsg} </Text>
        <TouchableOpacity onPress={()=>this.resetGame()}>
          <Text style={Styles.resButt}> Restart </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A3CB37',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    marginBottom: 120,
    fontSize: 60,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  grid: {
    //fontSize: 50,
  },
  cell:{
    flexDirection: 'row'
  },
  item:{
    borderWidth: 2,
    borderColor: '#badc57',
    borderRadius: 5,
    padding: 30
  },
  resButt:{
    marginTop: 60,
    backgroundColor : '#badc57',
    fontSize: 40,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    color: '#FFF'
  },
  res: { 
    marginTop: 20,
    fontSize: 30,
    color: '#FFF'
  }
});

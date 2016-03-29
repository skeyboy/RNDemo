/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
    NavigatorIOS,
    ListView,
  ScrollView,
  Text,
NativeModules,
    TouchableOpacity,
    AlertIOS,
  View
} from 'react-native';
var RNFileManger =  NativeModules.RNFileManger;

var Swiper = require('react-native-swiper')


class RNDemo extends Component {
renderSelctedItem(index, i){
  return ( <TouchableOpacity  key={""+i} onPress={()=>{
          AlertIOS.alert(""+index,""+i);
      }}>
      <View style={{flex:1,justifyContent:'center'}}>
          <Text style={{alignSelf:'center',}}>
          Hello{index}{i}
          </Text>
      </View>
  </TouchableOpacity>);
}
  render() {
var items = [];
for (var i = 0; i < 10; i++) {
var index = i;
    items.push(( this.renderSelctedItem(index,i)));

}

RNFileManger.fileExistsAtPath("Documents",(error,success)=>{
console.info(error+success+"\n");
 });

RNFileManger.createDirectoryAtPath("Documents/HH/XX",true,{},(error,success)=>{
  console.info(error+"\n"+success+"\n");

}, (erro)=>{
console.info(error);
});
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
    <ScrollView >
{items}

<Swiper showsButtons={true}
 onMomentumScrollEnd={this.onMomentumScrollEnd}>
{items}
</Swiper>
    </ScrollView>
      </View>
    );
  }
onMomentumScrollEnd(e,a,context){
  console.log(a, context,e);
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNDemo', () => RNDemo);

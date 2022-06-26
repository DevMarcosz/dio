import React from "react";
import {Linking, View, Image, Text, StyleSheet, SafeAreaView, StatusBar, Pressable} from 'react-native';

const backgroundColor = '#010409';
const colorFont = '#C9D1D9';
const colorFontNickname = '#4F565E';
const urlGitHub = 'https://github.com/DevMarcosz';
const imageProfileURL = 'https://avatars.githubusercontent.com/u/14898947?s=96&v=4';
const App = () => {

  const handlePressGoToGitHub = async () => {
   const res = await Linking.canOpenURL(urlGitHub);
   if(res){
    await Linking.openURL(urlGitHub);
   }
  };

  return (
  <SafeAreaView style={style.container} >
    <StatusBar backgroundColor={backgroundColor} barStyle='light-content' />
    <View style={style.content}>
       <Image 
       accessibilityLabel="Marcos olhabdo para direita todo bonitao"
       style={style.avatar} 
       source={{uri: imageProfileURL }} 
       />
       <Text accessibilityLabel="Nome Marcos Douglas" style={[style.defaultText, style.name]}>Marcos Douglas</Text>
       <Text accessibilityLabel="NickName @DevMarcos" style={[style.defaultText, style.nickname]}>@DevMarcosz</Text>
       <Text accessibilityLabel="Desenvolvedor Full Stack" style={[style.defaultText, style.description]}>Desenvolvedor Full Stack</Text>
      
       <Pressable onPress={handlePressGoToGitHub}>
       <View style={style.button}>
        <Text style={[style.defaultText, style.textButton]}>Open in GitHub</Text>
       </View>
       </Pressable>
    
    </View>
  </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content:{
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 3,
  },
  defaultText:{
    color: colorFont,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  nickname: {
    fontSize: 19,
    color: colorFontNickname ,
  },
  description: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  button : {
    backgroundColor: colorFontNickname,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});
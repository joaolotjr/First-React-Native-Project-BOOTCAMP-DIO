import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colotGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/102186193?v=4';
const urlToMyGithub = 'https://github.com/joaolotjr';

const App = () => {
  const handlePressGoTogithub = async () => {
    console.log('veificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link Aprovado');
      console.log('Abrindo Link....');
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colotGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="João Lot junior's profile picture"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Joao Carlos Lot Junior"
          style={[style.defaultText, style.name]}>
          Joao Carlos Lot Junior
        </Text>
        <Text
          accessibilityLabel="Nickname: joaolotjr"
          style={[style.defaultText, style.nickname]}>
          Joaolotjr
        </Text>
        <Text
          accessibilityLabel="Description: |Graduating Electrical Engineering UFOP| |Tech Lover| |C| |HTML5| |CSS6| |JavaScript| |Currently learning React-Native|"
          style={[style.defaultText, style.description]}>
          |Graduating Electrical Engineering UFOP| |Tech Lover| |C| |HTML5|
          |CSS6| |JavaScript| |Currently learning React-Native|
        </Text>
        <Pressable onPress={handlePressGoTogithub}>
          <View style={style.Button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    //column
    backgroundColor: colotGithub,
    flex: 1, //expandir pra tela inteira
    justifyContent: 'center',
    alignItems: 'center',
    //flexDirection: 'row',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    color: colorDarkFontGithub,
    fontSize: 18,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  Button: {
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});

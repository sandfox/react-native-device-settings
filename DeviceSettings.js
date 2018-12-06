
import { NativeModules, Linking, Platform } from 'react-native';
const { RNOpenSettings } = NativeModules;

function open(){
  try{
    if (Platform.OS !== 'ios') {
      RNOpenSettings.generalSettings();
    }
  }catch(err){
    console.error(err);
  }
}

function app(){
  try{
    (Platform.OS === 'ios') ?
      Linking.openURL('app-settings:') :
      RNOpenSettings.appSettings();
  }catch(err){
    console.error(err);
  }
}

function wifi(){
  try{
    if (Platform.OS !== 'ios') {
      RNOpenSettings.wifiSettings();
    }
  }catch(err){
    console.error(err);
  }
}

function location(){
  try{
    if (Platform.OS !== 'ios') {
      RNOpenSettings.locationSettings();
    }
  }catch(err){
    console.error(err);
  }
}

module.exports = { open , app, wifi, location };

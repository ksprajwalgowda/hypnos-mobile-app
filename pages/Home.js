import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Navbar from '../components/Navbar';

export default function Home({ navigation }) {
  const [tokenSession, setTokenSession] = useState('');
  AsyncStorage.getItem('auth_token').then(function (value) {
    setTokenSession(value);   
    console.log(tokenSession);   
      });

  
  if (tokenSession === 'no_token'){
    navigation.navigate('Login');
  }
  else{
    console.log("you have already logged in");
    }

  console.log('home');


  const onPress = () => {
    console.log('press:'+tokenSession); 
  };

  

  return (
    <View style={styles.container}>
      <Navbar setTokenSession={setTokenSession} navigation={navigation} />
      <TouchableOpacity onPress={onPress}>
        <View >
          <Text >
            press
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:35,
  },
})
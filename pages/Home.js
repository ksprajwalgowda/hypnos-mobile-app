import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, { useState, useEffect} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Home({ navigation }) {
  const [tokenSession, setTokenSession] = useState('');
  AsyncStorage.getItem('auth_token').then(function (value) {
      setTokenSession(value);
    // console.log(tokenSession);   
      });

  const goLoint = () => {
    navigation.navigate('Login');
  }
  
  if (tokenSession === 'no_token'){
    // navigation.navigate('Login');
    goLoint();
  }
  else{
    console.log("you have already logged in");
    }

  console.log('home');


  const onPress = () => {
    console.log('press:'+tokenSession); 
  };

  const logout = () => {
    console.log('logout');
    AsyncStorage.setItem('auth_token', 'no_token');
    setTokenSession('no_token');
    goLoint();

};


  return (
    <View style={styles.container}>
                  <View style={styles.navbar}>
                <View style={styles.navbarCamera}>
                    <TouchableOpacity>
                        <View style={styles.camera}>
                            <Icon name="camera" size={27} color="#000000" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.navbarItem}>
                    <View style={styles.logo}>

                        <Text style={styles.title}>Hypnos</Text>
                    </View>
                </View>
                <View style={styles.navbarProfile}>
                    <TouchableOpacity onPress={logout}>
                        <View style={styles.setting}>
                            <Icon name="user-circle" size={27} color="#000000" />
                        </View>
                    </TouchableOpacity>
                   
                </View>
            </View>
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
  navbar: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    marginLeft: 10,
    marginRight: 20,
    height: 80,
    // backgroundColor: '#FFB6B6',
    // paddingBottom: 30,
},
navbarProfile: {
    flex: 1,
},
navbarItem: {
    flex: 4,
},
navbarCamera: {
    flex: 1,
},
camera: {
    margin: 10,
    // flex: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fe1d7'
},
setting: {
    margin: 10,
    // flex: 1,
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8fe1d7',
    // marginRight: 100,
},
logo: {
    alignItems: 'center',
    justifyContent: 'center',
},
title: {
    fontSize: 20,
    fontWeight: 'bold',
    // fontStyle: 'italic',
    marginTop: 20,

}
})
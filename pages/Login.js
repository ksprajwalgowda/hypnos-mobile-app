import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'


export default function Login({ navigation }) {
  // console.log('App');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tokenSession, setTokenSession] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const baseUrl = 'https://tictacsm.pythonanywhere.com/auth/api-token-auth/'
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 'username': username, 'password': password })
    };
    let token;
    fetch(baseUrl, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        token = data;
        // console.log();
        if (typeof (token["token"]) == 'undefined') {
          console.log('No token');
          AsyncStorage.setItem('auth_token', 'no_token');
          // console.log("sessions: " + AsyncStorage.getItem('auth_token'));
          AsyncStorage.getItem('auth_token').then(function (value) {
            setTokenSession(value);      
              });
          // console.log(tokenSession);
          setError("Please try again!!!");


        } else {
          console.log('Token: ' + token["token"]);
          AsyncStorage.setItem('auth_token', token["token"]);
          AsyncStorage.getItem('auth_token').then(function (value) {
            setTokenSession(value);      
              });
          // console.log(tokenSession);
          setError("");
          navigation.navigate('Home');
          

        }
      });

    setPassword('');
    setUsername('');

  }


  return (
    <View style={styles.container}>
      {/* <Login /> */}
      <Text style={styles.title}>Welcome Back!!!</Text>
      <Image style={styles.image} source={require('../assets/title_vec.png')} />
      <Text style={styles.subtitle}>{error}</Text>
      <TextInput
        style={styles.input}
        onChangeText={newText => setUsername(newText)}
        value={username}
        placeholder="Enter Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={newText => setPassword(newText)}
        value={password}
        secureTextEntry={true}
        placeholder="Enter password"
      />

      <TouchableOpacity>
        <View style={styles.forgotPassword_layer} >
          <Text style={styles.forgotPassword}>
            Forgot Password
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.btn_title}>
            Login
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.signup_layer}>
        <View >
          <Text style={styles.signup}>Dont have an account ?</Text>
        </View>
        <View >
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <View  >
              <Text style={styles.forgotPassword}>
                Sign up
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 50,
  },
  input: {
    borderRadius: 25,
    height: 40,
    width: 250,
    marginBottom: 25,
    borderWidth: 1,
    padding: 10,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  image: {
    marginBottom: 50,
  },
  button: {
    width: 250,
    borderRadius: 50,
    height: 50,
    backgroundColor: '#8FE1D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn_title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  forgotPassword: {
    color: '#8FE1D7',
  },
  forgotPassword_layer: {
    width: 250,
    paddingBottom: 10
  },
  signup_layer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
  },
  subtitle: {
    color: 'red',
    fontWeight: 'bold',
    marginBottom: 25,
  }


});
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React, {useState,} from 'react'

export default function Signup({ navigation}) {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSinup = () => {


  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Onboard!</Text>
      <Text style={styles.subtitle}>Let's help you to meet up tasks..</Text>
      <TextInput
        style={styles.input}
        onChangeText={newText => setUsername(newText)}
        value={username}
        placeholder="Enter Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={newText => setUsername(newText)}
        value={email}
        placeholder="Enter Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={newText => setUsername(newText)}
        value={password}
        placeholder="Enter password"
      />
      <TextInput
        style={styles.input}
        onChangeText={newText => setUsername(newText)}
        value={confirmPassword}
        placeholder="confirm Password"
      />
      <TouchableOpacity onPress={handleSinup}>
        <View style={styles.button}>
          <Text style={styles.btn_title}>
            Register
          </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.signup_layer}>
        <View >
          <Text style={styles.signup}>Dont have an account? </Text>
        </View>
        <View >
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <View  >
              <Text style={styles.forgotPassword}>
                 Login
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:50,
    flex: 1,
    backgroundColor: '#F0F4F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
  },
  subtitle:{
    fontSize: 20,
    marginBottom: 50,
    // fontWeight: 50,
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
  signup_layer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 30,
  },
})

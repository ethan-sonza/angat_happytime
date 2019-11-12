import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import { Redirect } from "react-router-native";

import constants from '../../constants'
import styles from './style'

function Login({isAuthenticated}) {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [loading, setLoading] = useState(false)
  const [valid, setValid] = useState(true)
  const [redirect, setRedirect] = useState(false)

  const login = () => {
    let params = {
      username: username,
      password: password,
      grant_type: "password",
    }

    setLoading(true)
    setValid(true)

    axios.post(constants.API_HOST + "/oauth/token", params)
      .then(response => {
        AsyncStorage.setItem('@auth_token', response.data.access_token)
        setValid(true)
        setLoading(false)
        setRedirect(true)
        isAuthenticated()
      })
      .catch(() => {
        setValid(false)
        setLoading(false)
      }
    );
  }
  
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <TextInput
        placeholder="Username"
        value={username}
        textContentType="username"
        style={styles.input}
        onChangeText={text => setUsername(text)}
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        value={password}
        textContentType="password"
        style={styles.input}
        onChangeText={text => setPassword(text)}
        autoCapitalize="none"
        secureTextEntry={true}
      />

      {!valid && <Text style={styles.invalid}>Invalid login</Text>}

      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => login()}>
          <Text style={styles.button}>
            Login
            {loading && "..."}
          </Text>
        </TouchableOpacity>
      </View>

      {redirect && <Redirect to="/"/>}
    </View>
  )
}

export default Login;
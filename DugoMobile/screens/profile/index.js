import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage';
import { Redirect } from "react-router-native";

import constants from '../../constants'

function Profile({ logout }) {
  const [profile, setProfile] = useState(null)
  const [token, setToken] = useState(null)
  const [redirect, setRedirect] = useState(false)

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@auth_token')
      if (value !== null) {
        setToken(value)
        let params = { token: value }
        axios.get(constants.API_HOST + constants.API_ROOT + "/me", {params})
          .then(response => {
            console.log(response)
            setProfile(response.data)
          })
          .catch((error) => {
            console.log("GET:" + error)
          }
        );
      }
    } catch (error) {
      console.log("Async:" + error)
    }
  }

  if(!token) getData()

  return (
    <View>
      {!profile && <Text>Not logged in.</Text>}
      {profile && (
        <React.Fragment>
          <Text>{profile.first_name} {profile.last_name}</Text>
          <Text>Mobile: {profile.mobile_number}</Text>
          <Text>Email: {profile.email}</Text>
          <Button title="Logout" onPress={() => {setRedirect(true); logout()}}/>
          
          {redirect && <Redirect to="/" />}
        </React.Fragment>
      )}
    </View>
  )
}

export default Profile;
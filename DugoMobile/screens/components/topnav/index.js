import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

import constants from '../../../constants'
import styles from './style'

function TopNav({ openDrawer }) {
  let location = useLocation();
  let page = constants.pages.find((p) => p.path === location.pathname)

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon="bars" color="white" size={24} onPress={() => openDrawer()}/>
      <Text style={styles.title}>{page.name}</Text>
    </View>
  )
}

export default TopNav;
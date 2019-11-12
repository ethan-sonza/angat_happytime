import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import styles from './style'

function TopNav({ openDrawer }) {

  return (
    <View style={styles.container}>
      <FontAwesomeIcon icon="bars" color="white" size={24} onPress={() => openDrawer()}/>
    </View>
  )
}

export default TopNav;

import React from 'react';
import { SafeAreaView, TouchableOpacity, FlatList, Text } from 'react-native';
import { useLocation } from "react-router-dom";
import { Link } from "react-router-native";

import constants from '../../../constants'
import styles from './style'

function Drawer({ closeDrawer, authenticated }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.app_name}>{"DuGo Mobile"} </Text>
      <FlatList
        data={constants.pages}
        renderItem={({ item }) => {
          if(item.path === '/login' && authenticated) return null
          else if (item.path === '/profile' && !authenticated) return null
          else return(
            <Item 
              page={item}
              closeDrawer={closeDrawer}
            />
          )
        }}
        keyExtractor={item => item.path}
      />
      <Text style={styles.credit}>hANGAThon 2019 - HappyTime</Text>
    </SafeAreaView>
  )
}

const Item = ({ page, closeDrawer }) => {
  let location = useLocation();
  const { path, name } = page
  return (
    <TouchableOpacity>
      <Link to={path} onPress={() => closeDrawer()}>
        <Text style={[
          styles.item_name,
          (location.pathname === path && styles.active)
        ]}>
          {name}
        </Text>
      </Link>
    </TouchableOpacity>
  );
}

export default Drawer;

import React, { useState } from 'react';
import { Text, View, FlatList, Image, ScrollView } from 'react-native';
import styles from './style'
import { YellowBox } from 'react-native'

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Occurs when FlatList is inside ScrollView since v61. Fairly new, will keep an eye out.
])

function BloodBanks() {
  return (
    <ScrollView>
      <FlatList
        data={banks}
        renderItem={({ item }) => (
          <View style={styles.bank}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.number}</Text>
            <Text>{item.address}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ScrollView>
  )
}

const banks = [
  { 
    id: 1,
    name: "Mother Seation Blood Bank & Clinical Laboratory", 
    address: "1575-77 F.Yuseco (Formerly Tayabas) Corner Rizal Avenue Sta. Cruz 1000 Manila Metro Manila, Manila, Metro Manila", 
    number: "+63(2)2541023 ",
  }, { 
    id: 2,
    name: "Hermoso Diagnostic Center", 
    address: "San Lazaro Street, Rizal Avenue, Sta. Cruz. P.C. 1706, Manila, Metro Manila. ", 
    number: "+63(2)7118851",
  }, { 
    id: 3,
    name: "People's Blood Bank", 
    address: "Oroquieta Street, Sta. Cruz. P.C. 1624, Manila, Metro Manila.", 
    number: "+63(2)7118770",
  }, { 
    id: 4,
    name: "Holy Redeemer Blood Banking ", 
    address: "P. Guevarra Street, Sta. Cruz. P.C. 1748, Manila, Metro Manila. ", 
    number: "+63(2)7118405",
  }
]
export default BloodBanks;
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import styles from './style'

function PostItem({post}) {
  return (
    <View style={styles.post}>
      <Text>{post.name}</Text>
    </View>
  )
}

export default PostItem;


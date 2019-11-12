import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './style'

import PostDetails from '../postDetails'

function PostItem({ post, onItemSelect }) {
  return (
    <TouchableOpacity onPress={() => onItemSelect(post)}>
      <View style={styles.post}>
        <PostDetails post={post} />
      </View>
    </TouchableOpacity>
  )
}
export default PostItem;


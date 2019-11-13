import React, { useState, useEffect, useRef } from 'react';
import { Text, View, FlatList, Modal, TouchableHighlight, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import axios from 'axios';
import { YellowBox } from 'react-native'

import constants from '../../constants'
import styles from './style'
import PostItem from '../components/postItem'
import PostDetails from '../components/postDetails';

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested', // TODO: Occurs when FlatList is inside ScrollView since v61. Fairly new, will keep an eye out.
])

function Board() {
  const didMountRef = useRef(false);
  const [post, setPost] = useState({})
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [showPostModal, setShowPostModal] = useState(false)

  const getPosts = () => {  
    setLoading(true)
    axios.get(constants.API_HOST + constants.API_ROOT + "/posts")
      .then(response => {
        setLoading(false)
        setPosts(response.data)
      })
      .catch(error => {
        setLoading(false)
        console.log(error)
      }
    );
  }

  const onItemSelect = (post) => {
    setPost(post)
    setShowPostModal(true)
  }

  useEffect(() => {
    if (!didMountRef.current) getPosts()
    didMountRef.current = true;
  }, [getPosts])

  return (
    <React.Fragment>
      <ScrollView>
        { loading && <Text>Loading...</Text>}
        { !posts.length && !loading && <Text>No Posts</Text>}
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostItem post={item} onItemSelect={onItemSelect}/>}
          keyExtractor={item => item.id.toString()}
        />

        {/* POST - todo: separate */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={showPostModal}
        >
          <View style={styles.modal}>
            <View>
              <TouchableHighlight
                style={styles.close}
                onPress={() => setShowPostModal(false)}>
                <FontAwesomeIcon icon="times" />
              </TouchableHighlight>
              
              <PostDetails post={post} full />

            </View>
          </View>
        </Modal>
      </ScrollView>
      <TouchableOpacity style={styles.add}>
        <FontAwesomeIcon icon="plus" color="white" size={26} />
      </TouchableOpacity>
    </React.Fragment>
  )
}

export default Board;
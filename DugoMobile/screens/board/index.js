import React, { useState, useEffect, useRef } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import axios from 'axios';
import constants from '../../constants'

import PostItem from '../components/postItem'

function Board() {
  const didMountRef = useRef(false);
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

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
  useEffect(() => {
    if (!didMountRef.current) getPosts()
    didMountRef.current = true;
  }, [getPosts])

  return (
    <View>
      <Text>Board</Text>
      { loading && <Text>Loading...</Text>}
      { !posts.length && !loading && <Text>No Posts</Text>}
      <FlatList
        data={posts}
        renderItem={({ item }) => (<PostItem post={item}/>)}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  )
}

export default Board;
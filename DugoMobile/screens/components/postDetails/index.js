import React from 'react';
import { Text, Image } from 'react-native';
import moment from 'moment'

import placeholderMap from '../../../images/placeholder_map.png'

function PostDetails({ post, full }) {
  const bloodTypeChart = (blood_type) => {
    switch (blood_type) {
      case "O-":
        return ["O-"]
      case "O+":
        return ["O-", "O+"]
      case "A-":
        return ["O-", "A-"]
      case "A+":
        return ["O-", "O+", "A-", "A+"]
      case "B-":
        return ["O-", "B-"]
      case "B+":
        return ["O-", "O+", "B-", "B+"]
      case "AB-":
        return ["O-", "A-", "B-", "AB-"]
      case "AB+":
        return ["O-", "O+", "A-", "A+", "B-", "B+", "AB-", "AB+"]
      default:
        return [];
    }
  }

  if(full) {
    return (
      <React.Fragment>
        <Image
          style={{ width: 250, height: 120 }}
          source={placeholderMap}
        />
        <Text>{"\n"}Patient: {post.name} ({post.age})</Text>
        <Text>Date Posted: {moment(post.created_at).format('DD-MM-YYYY')}</Text>
        <Text>Hospital/Clinic: Medical City - Ortigas</Text>
        <Text>Blood Type Needed: {post.blood_type}</Text>
        <Text>Compatible Blood Types: {bloodTypeChart(post.blood_type).join(', ')}</Text>
        <Text>Coordinates: {post.longitude}, {post.latitude}</Text>
        <Text>{"\n"}Description: {"\n\n"}{post.description}</Text>
        {/* TODO: actual map integration */}
      </React.Fragment>  
    )
  } else {
    return (
      <React.Fragment>
        <Text>Patient: {post.name} ({post.age})</Text>
        <Text>Date Posted: {moment(post.created_at).format('DD-MM-YYYY')}</Text>
        <Text>Hospital/Clinic: Medical City - Ortigas</Text>
        <Text>Blood Type Needed: {post.blood_type}</Text>
        <Text>Compatible Blood Types: {bloodTypeChart(post.blood_type).join(', ')}</Text>
      </React.Fragment>
    )
  }
}

export default PostDetails;
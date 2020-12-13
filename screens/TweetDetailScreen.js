import React from 'react';
import {View, Text} from 'react-native';

const TweetDetailScreen = (props) => {
  const tweet = props.route.params.tweet;
  return (
    <View>
      <Text>{tweet.text}</Text>
    </View>
  );
};

export default TweetDetailScreen;

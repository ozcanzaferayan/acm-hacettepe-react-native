import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();

const Post = (props) => {
  const tweet = props.tweet;
  const handleGotoDetails = () => {
    props.navigation.push('TweetDetail', {tweet: tweet});
  };
  return (
    <TouchableOpacity style={styles.post} onPress={handleGotoDetails}>
      <Image style={styles.profileImage} source={{uri: tweet.profileImage}} />
      <View style={styles.tweetContainer}>
        <View style={styles.header}>
          <Text style={styles.username}>{tweet.username}</Text>
          {tweet.isVerified && (
            <Icon style={styles.icon} name="verified" size={18} />
          )}
          <Text style={styles.userHandle}>{tweet.userHandle}</Text>
        </View>
        <Text style={styles.text}>{tweet.text}</Text>
        <Image style={styles.tweetImage} source={{uri: tweet.image}} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, backgroundColor: 'white'},
  myText: {
    color: 'red',
    fontSize: 26,
  },
  post: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 12,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  tweetContainer: {
    backgroundColor: 'white',
    flex: 1,
    height: 200,
    paddingVertical: 0,
    paddingStart: 12,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  icon: {
    color: 'dodgerblue',
    marginEnd: 5,
  },
  username: {
    fontSize: 16,
    marginEnd: 5,
  },
  userHandle: {
    fontSize: 16,
    opacity: 0.5,
  },
  text: {
    fontSize: 16,
  },
  tweetImage: {
    marginTop: 5,
    flex: 1,
    // width: 100,
    // height: 100,
    // borderRadius: 50,
  },
});

export default Post;

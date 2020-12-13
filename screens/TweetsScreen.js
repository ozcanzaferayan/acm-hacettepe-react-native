import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Post from '../components/Post';

const TweetsScreen = (props) => {
  console.log('1111111111', props);

  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/tweets')
      .then((response) => response.json())
      .then((dataTweets) => setTweets(dataTweets));
  }, []);
  const handleGoToAddTweets = () => {
    props.navigation.push('AddTweet', {myProp: 'Zafer'});
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tweets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({item}) => (
          <Post tweet={item} navigation={props.navigation} />
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleGoToAddTweets}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {justifyContent: 'center', flex: 1, backgroundColor: 'white'},
  addButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
    marginEnd: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
    color: 'white',
  },
  addButtonText: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
});

export default TweetsScreen;

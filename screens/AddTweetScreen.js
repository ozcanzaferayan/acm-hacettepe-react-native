import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const AddTweetScreen = (props) => {
  const [text, setText] = useState('');
  const handleAfterSend = () => {
    setText('');
    props.navigation.goBack();
  };
  const handlePress = () => {
    fetch('http://localhost:3000/tweets', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        profileImage: 'https://via.placeholder.com/100',
        username: 'Batuhan',
        isVerified: true,
        userHandle: '@Batuhan',
        text: text,
        image: 'https://via.placeholder.com/100',
      }),
    })
      .then((response) => response.json())
      .then(() => handleAfterSend())
      .catch((error) => console.error(error));
  };
  return (
    <View>
      <TextInput
        placeholder="Type here to translate!"
        onChangeText={(t) => setText(t)}
        defaultValue={text}
      />
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Send Tweet</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'dodgerblue',
  },
});

export default AddTweetScreen;

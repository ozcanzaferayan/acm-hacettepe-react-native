import React from 'react';
import TweetsScreen from './screens/TweetsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddTweetScreen from './screens/AddTweetScreen';
import TweetDetailScreen from './screens/TweetDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tweets" component={TweetsScreen} />
        <Stack.Screen name="AddTweet" component={AddTweetScreen} />
        <Stack.Screen name="TweetDetail" component={TweetDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

//import liraries
import React, { Component,useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import{ requestUserPermission,NotificationListener} from './src/utils/PushNotification_helper';

// create a component
const App = () => {

useEffect(()=>{
requestUserPermission();
NotificationListener();
},[])
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize:18,fontWeight:'bold'}}>Notifications</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default App;

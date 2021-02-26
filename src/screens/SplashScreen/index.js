// Import React and Component
import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {

  useEffect(() => {
    setTimeout(() => {
        AsyncStorage.getItem('user_id').then((value) =>
            navigation.replace(
            value === null ? 'Auth' : 'DrawerNavigationRoutes'
            ));
        }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../images/1.png')}
        style={{width: 100, height: 100, resizeMode: 'contain'}}
      />
     
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3f0fc',
  }
});
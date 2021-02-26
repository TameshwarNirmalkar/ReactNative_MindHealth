// Import React and Component
import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
const Loader = (props) => {
  
  return (
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={true}
            color="#307ecc"
            size="large"
            style={styles.activityIndicator}
          />
        </View>
      </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,.5)',
    display: "flex",
    zIndex: 1,
    position: "fixed",
    height: "100vh",
    width: "100vw",
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    height: 100,
    width: 100,
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
  },
});
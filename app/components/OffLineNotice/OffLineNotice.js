import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../config/colors';
import {useNetInfo} from '@react-native-community/netinfo';

function OffLineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    zIndex: 1,
    height: 50,
    width: '100%',
  },
  text: {
    color: colors.white,
  },
});

export default OffLineNotice;

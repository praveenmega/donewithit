import React from 'react';
import {Modal,StyleSheet,View} from 'react-native';
import * as Progress from 'react-native-progress';
import DoneLogo from '../components/DoneLogo/DoneLogo';
import colors from '../config/colors';

function UploadScreen({progress = 0, visible = false,onDone}) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 100 ? (
          <Progress.Bar color={colors.primary} progress={progress} width={200} />
        ) : (
          <DoneLogo onDone={onDone}/>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default UploadScreen;

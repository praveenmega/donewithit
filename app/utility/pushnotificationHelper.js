// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     await getFCMToken();
//   }
// }

// async function getFCMToken() {
//   let fcmToken = AsyncStorage.getItem('fcmToken');
//   console.log('FcmToken:', fcmToken);
//   if (!fcmToken) {
//     try {
//       fcmToken = messaging().getToken();
//       if (fcmToken) {
//         console.log('FcmToken:', fcmToken);
//         await AsyncStorage.setItem('fcmToken', fcmToken);
//       }
//     } catch (error) {}
//   }
// }

// const notificationListner = () => {
//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//   });

//   messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       if (remoteMessage) {
//         console.log(
//           'Notification caused app to open from quit state:',
//           remoteMessage.notification,
//         );
//         setInitialRoute(remoteMessage.data.type); // e.g. "Settings"
//       }
//     });

//   messaging().onMessage(async remoteMessage => {
//     console.log("Notification on foreground state..",remoteMessage);
//   });
// };


// export default {requestUserPermission,getFCMToken,notificationListner};
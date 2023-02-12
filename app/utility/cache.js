import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment/moment';

const prefix = 'cache';
const expiringTime = 5;

const store = async (key, value) => {
  const item = {
    value,
    timestamp: Date.now(),
  };

  try {
    await AsyncStorage.setItem(prefix + key, JSON.stringify(item));
  } catch (e) {
    console.log(e);
  }
};

const isExpiredTime = item => {
  const now = moment(Date.now());
  const storedTime = moment(item.timestamp);
  const isExpired = now.diff(storedTime, 'minutes') > expiringTime;

  return isExpired;
};

const get = async key => {
  try {
    const value = await AsyncStorage.getItem(prefix + key);
    const item = JSON.parse(value);

    if (!item) return null;

    const isExpired = isExpiredTime(item);

    if (isExpired) {
      await AsyncStorage.removeItem(prefix + key);
      return null;
    }
    return item.value;
  } catch (e) {
    console.log(e);
  }
};

export default {
  store,
  get,
};

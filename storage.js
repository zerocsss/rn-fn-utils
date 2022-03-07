import AsyncStorage from '@react-native-community/async-storage';

async function storeData(name, value) {
  try {
    const result = await AsyncStorage.setItem(name, value);
    return result;
  } catch (e) {
    // saving error
  }
}

async function getData(name) {
  try {
    const value = await AsyncStorage.getItem(name);
    return value;
  } catch (e) {
    // error reading value
  }
}

function removeData(name) {
  AsyncStorage.removeItem(name);
}

async function clearAll() {
  try {
    await AsyncStorage.clear()
  } catch(e) {
    // clear error
  }
}

export {storeData, getData, removeData, clearAll};

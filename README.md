# React Native boilerplate
Simple React Native boilerplate to start new projects.

**React version:** 16.11.0  
**React Native version:** 0.62.2

Below you will find a list of all the libraries included, and a brief explanation of each one, along with how to remove some that maybe you don't want to.

## How to setup App Icons:

### Android:
Change ic_launcher.png and ic_launcher_round.png in *android/app/src/main/res/mipmap* folders

### IOS:
* Open Xcode project.
* Open *reactNativeBase/reactNativeBase/Images.xcassets* folder
* Put the desirable icons within the AppIcon Image Set

## How to setup Splash Screens:

### Android:
Change launch_screen.png in *android/app/src/main/res/mipmap* and *android/app/src/main/res/drawable* folders

### IOS:
* Open Xcode project.
* Open *reactNativeBase/reactNativeBase/Images.xcassets* folder
* Create a new image set with the Splash Icon you want
* Open *reactNativeBase/reactNativeBase/LaunchScreen.xib*
* Replace Image View with the new Image View you added in Images.xcassets and adjust it to your need

## Libraries which are included:
* react-native-clean-project  
* redux
* redux-persist
* redux-saga
* prop-types
* AsyncStorage
* eslint
* axios
* react-native-config
* @react-navigation/native

### react-native-clean-project:  
Cleans your React Native project by purging caches and modules, and reinstalling them again.  
To execute it run the command `yarn clean` for a personalized clean.  

**Version:** 3.3.0  
**Link:** https://www.npmjs.com/package/react-native-clean-project

### redux
Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments and are easy to test.  

**Version:** 4.0.5  
**Links:**
* https://github.com/reduxjs/redux
* https://github.com/reduxjs/react-redux

### redux-persist
Redux Persist takes your Redux state object and saves it to persisted storage. A good use for this library is to persist the data of the session.
By default it will save all reducers. If you want to stop persisting any particular reducer, add a **blacklist** field to the **persistConfig** object in store.js  
For example:
```javascript
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['appReducer'],
};
```
**Version:** 6.0.0  
**Link:** https://github.com/rt2zz/redux-persist

**Steps to remove redux-persist if you don't want it in your project:**
* yarn remove redux-persist or npm uninstall redux-persist
* Remove PersistGate tag in App.js along with the imports related (line 23 & 26).
* Change the first parameter in **createStore** to be **rootReducer** instead of **persistedReducer** in file *src/redux/store.js* and also remove all the imports and configurations that are no longer used.

### redux-saga
Library that aims to make application side effects.

**Version:** 1.1.3  
**Link:** https://www.npmjs.com/package/react-native-clean-project

**Steps to remove redux-sagas if you don't want it in your project:**
* yarn remove redux-sagas or npm uninstall redux-sagas
* Remove lines 10, 24 & 28 in file *src/redux/store.js(everything regarding sagas)* and also remove all the imports that are no longer used.
* Remove the *sagas* folder in *src/redux*

### prop-types
Runtime type checking for React props and similar objects.

**Version:** 15.7.2  
**Link:** https://github.com/facebook/prop-types

### AsyncStorage
An asynchronous, persistent, key-value storage system for React Native.

**Version:** 1.10.1  
**Link:** https://github.com/react-native-community/async-storage

### eslint
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.

**Version:** 6.8.0
**Link:** https://github.com/eslint/eslint

### axios
Promise-based HTTP client. Easy to send asynchronous HTTP request to REST endpoints and perform CRUD operations.
You can also use it with a **axios-case-converter**. This library is an axios transformer/interceptor that converts snake_case/camelCase.

**Version:** 0.19.2
**Link:** https://github.com/axios/axios

### react-native-config
Module to expose config variables to your javascript code in React Native

**Version:** 1.0.0  
**Link:** https://github.com/luggit/react-native-config  

**How to use it:**
Add a *.env* file in the root of your app.
```javascript
import Config from 'react-native-config'

Config.getConstants(); // Returns an object with the env variables
```

### @react-navigation/native
Routing and navigation for your React Native apps. Documentation can be found at https://reactnavigation.org.  

**Version:** 5.4.0  
**Link:** https://github.com/react-navigation/react-navigation

import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
      firebase.initializeApp({
          apiKey: 'AIzaSyCwra_SmP6rP51ccPWgi0gkHWppb4CiEiY',
          authDomain: 'auth-ac6e0.firebaseapp.com',
          databaseURL: 'https://auth-ac6e0.firebaseio.com',
          projectId: 'auth-ac6e0',
          storageBucket: 'auth-ac6e0.appspot.com',
          messagingSenderId: '1053158773753'
      });
    }

    render() {
      return (
        <View>
          <Header headerText='Auth' />
          <LoginForm />
        </View>
      );
    }
}

export default App;

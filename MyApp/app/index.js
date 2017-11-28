
import React, { Component } from 'react';
import {
    StackNavigator,
} from 'react-navigation';

import MainScreen from './containers/main';
import ProfileScreen from './containers/profile';

export default StackNavigator({
    Main: {screen: MainScreen},
    Profile: {screen: ProfileScreen},
});
 

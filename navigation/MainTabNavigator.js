import React from 'react';
import { Platform, Text, View } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

import SearchHome from '../screens/SearchHome';
import RecentSearch from '../screens/RecentSearch';
import DownloadHistory from '../screens/DownloadHistory';

export default TabNavigator(
  {
    'Search': {
      screen: SearchHome,
    },
    'Recent Search': {
      screen: RecentSearch,
    },
    'History': {
      screen: DownloadHistory,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Search':
            iconName = Platform.OS === 'ios'
              ? `ios-search${focused ? '' : '-outline'}`
              : 'md-search';
            break;
          case 'Recent Search':
            iconName = Platform.OS === 'ios'
              ? `ios-eye${focused ? '' : '-outline'}`
              : 'md-eye';
            break;
          case 'History':
            iconName = Platform.OS === 'ios'
              ? `ios-download${focused ? '' : '-outline'}`  
              : 'md-download';
        }
        return (
          <Ionicons
            name={iconName}
            size={25}            
            color={focused ? 'red' : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: 'red',
    },
  }
);

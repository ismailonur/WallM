import React from 'react';

import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {Icon} from 'react-native-elements';

// screens
import Home from './screens/tabNavigatorPages/HomePage';
import Categories from './screens/tabNavigatorPages/Categories';
import Downloads from './screens/tabNavigatorPages/Downloads';
import WallScreen from './screens/WallScreen';
import CategoriesWallpapers from './screens/categories/CategoriesWallpapers';

const MainStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTransparent: true,
    },
  },
  WallScreenMain: {
    screen: WallScreen,
    navigationOptions: {
      headerTransparent: true,
    },
  },
});

MainStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const Categorie = createStackNavigator({
  Categories: {
    screen: Categories,
    navigationOptions: {
      headerTransparent: true,
    },
  },
  CategoriesWallpapers: {
    screen: CategoriesWallpapers,
    navigationOptions: {
      headerTransparent: true,
    },
  },
  WallScreenCategories: {
    screen: WallScreen,
    navigationOptions: {
      headerTransparent: true,
    },
  },
});

Categorie.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const Download = createStackNavigator({
  Downloads: {
    screen: Downloads,
    navigationOptions: {
      headerTransparent: true,
    },
  },
  WallScreenDownload: {
    screen: WallScreen,
    navigationOptions: {
      headerTransparent: true,
    },
  },
});

Download.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible,
  };
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: MainStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return (
            <Icon name="home" type="font-awesome" color={tintColor} size={22} />
          );
        },
        tintColor: 'black',
      },
    },
    Categories: {
      screen: Categorie,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return (
            <Icon name="list" type="foundation" color={tintColor} size={22} />
          );
        },
      },
    },

    Downloads: {
      screen: Download,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => {
          return (
            <Icon
              name="download"
              type="foundation"
              color={tintColor}
              size={22}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      //showLabel: false,
      activeTintColor: '#fff',
      inactiveTintColor: '#000',
      style: {
        backgroundColor: 'fff',
      },
    },
  },
);

export default createAppContainer(TabNavigator);

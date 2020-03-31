import React from "react";
import { Platform } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Colors from "../constants/styles";

import HomeScreen from "../screens/Home";
import NewMotive from "../screens/NewMotive";
import UserAccount from "../screens/UserAccount";
import Welcome from '../screens/auth/Welcome'
import EnterPhone from '../screens/auth/EnterPhone'
import VerificationCode from '../screens/auth/VerificationCode'
import SearchScreen from '../screens/SearchScreen'
import Available from '../screens/auth/Available'

const defaultOptions = {
  title:'',
  headerTitleAlign: "center",
  headerTitleStyle: {
    fontWeight: "bold"
  },
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "transparent",
    height:0

  }
};

const AppStack = createStackNavigator({
    Home: HomeScreen
  },
  {
    defaultNavigationOptions: defaultOptions
  });
const SearchStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen
    }
  },
  {
    defaultNavigationOptions: defaultOptions
  }
);
const UserStack = createStackNavigator(
  {
    User: {
      screen: UserAccount
    }
  },
  { 
    defaultNavigationOptions: defaultOptions
  }
);
const MotiveStack = createStackNavigator(
  {
    Motive: {
      screen: NewMotive
    }
  },
  {
    defaultNavigationOptions: defaultOptions
  }
);
const MessagesStack = createStackNavigator(
  {
    Messages: {
      screen: NewMotive
    }
  },
  {
    defaultNavigationOptions: defaultOptions
  }
);
 const AuthStack = createStackNavigator(
  {
    Auth: {
      screen:EnterPhone
    }, 
    VerificationCode:VerificationCode,
    Available:Available
  },
  {
    defaultNavigationOptions: defaultOptions
  }
);


const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppStack,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name='md-list' size={26} color={tabInfo.tintColor} />
          );
        }
      }
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return <Ionicons name='ios-search' size={26} color={tabInfo.tintColor} />;
        }
      }
    },
    Motive: {
      screen: MotiveStack,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons name='ios-add-circle-outline' size={26} color={tabInfo.tintColor} />
          );
        }
      }
    },
    Messages: {
      screen: AppStack,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <MaterialIcons name='chat-bubble-outline' size={26} color={tabInfo.tintColor} />
          );
        }
      }
    },
    Account: {
      screen: UserStack,
      navigationOptions: {
        tabBarIcon: tabInfo => {
          return (
            <MaterialIcons name='person-outline' size={27} color={tabInfo.tintColor} />
          );
        }
      }
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.main,
      showLabel:false
    }
  }
);
const Switch = createSwitchNavigator({
  Welcome:Welcome,
  Auth:AuthStack,
  Home:TabNavigator

}) 


export default createAppContainer(Switch);
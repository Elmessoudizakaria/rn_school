import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Icon } from 'react-native-elements';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';
import SearchScreen from './src/screens/SearchScreen';
import StarterScreen from './src/screens/StarterScreen';
import TeacherDetail from './src/screens/TeacherDetail';

const HomeStack = createStackNavigator();
const HomeFlowScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="MainPage"
      options={{ title: 'Entry', headerShown: false }}
      component={StarterScreen}
    />
  </HomeStack.Navigator>
);
const MainStack = createStackNavigator();
const MainFlowScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="SchoolHome"
        options={{ title: 'Home', headerShown: false }}
        component={HomeScreen}
      />
      <MainStack.Screen
        name="SchoolSearch"
        options={{ title: 'Search' }}
        component={SearchScreen}
      />
      <MainStack.Screen
        name="SearchDetail"
        options={{ title: 'Teacher' }}
        component={TeacherDetail}
      />
      <MainStack.Screen
        name="SchoolSearchResult"
        options={{ title: 'Teachers' }}
        component={SearchResultScreen}
      />
    </MainStack.Navigator>
  );
};

const ProfileStack = createStackNavigator();
const ProfileFlowScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      options={{ title: 'Profile' }}
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>
);
const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator screenOptions={{ headerShown: false }}>
    <Tabs.Screen
      options={{ title: 'Home', tabBarShowLabel: false }}
      name="SchoolFlow"
      component={MainFlowScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="home" color="#00aced" />,
      }}
    />
    <Tabs.Screen
      options={{ title: 'Profile' }}
      name="ProfileFlow"
      component={ProfileFlowScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <Icon name="user" type="font-awesome" color="#00aced" />
        ),
      }}
    />
  </Tabs.Navigator>
);
const RootStack = createStackNavigator();
const RootScreen = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Home" component={HomeFlowScreen} />
      <RootStack.Screen name="App" component={TabsScreen} />
    </RootStack.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <RootScreen />
    </NavigationContainer>
  );
}

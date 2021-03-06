import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SearchResultScreen from './src/screens/SearchResultScreen';
import SearchScreen from './src/screens/SearchScreen';
import StarterScreen from './src/screens/StarterScreen';
import TeacherDetail from './src/screens/TeacherDetail';
import reducers from './src/store/reducers';
import { connect } from 'react-redux';
const HomeStack = createStackNavigator();
const HomeFlowScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="MainPage"
      options={{ title: 'Entry', headerShown: false }}
      component={StarterScreen}
    />
    <HomeStack.Screen
      name="AuthPage"
      options={{ title: 'Login', headerShown: false }}
      component={LoginScreen}
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
const TabsScreen = (props) => {
  return (
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
      {props.user && props.user.uid ? (
        <Tabs.Screen
          options={{ title: 'Profile' }}
          name="ProfileFlow"
          component={ProfileFlowScreen}
          options={{
            tabBarLabel: 'Compte',
            tabBarIcon: () => (
              <Icon name="user" type="font-awesome" color="#00aced" />
            ),
          }}
        />
      ) : null}
    </Tabs.Navigator>
  );
};
const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};
const TabsStatckScreen = connect(mapStateToProps)(TabsScreen);
const RootStack = createStackNavigator();
const RootScreen = (props) => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      {!props.user || !props.user.uid ? (
        <RootStack.Screen name="Home" component={HomeFlowScreen} />
      ) : null}

      <RootStack.Screen name="App" component={TabsStatckScreen} />
    </RootStack.Navigator>
  );
};

const RootStatckScreen = connect(mapStateToProps)(RootScreen);
export default function App() {
  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStatckScreen />
      </NavigationContainer>
    </Provider>
  );
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useEffect, useMemo, useReducer, useState } from 'react';
import { View } from 'react-native';
import HomeScreen from './app/pages/Home';
import LoginScreen from './app/pages/Login';
import LogoTitle from './app/pages/LogoTitle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CartModal from './app/pages/CartModal';

const Stack = createNativeStackNavigator();
export const AuthContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('auth');
      } catch (e) {
        console.log(e)
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data) => {

        dispatch({ type: 'SIGN_IN', token: data });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' })
    }),
    []
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
          {state.userToken == null ? (
            <Stack.Screen name="SignIn" component={LoginScreen} />
          ) : (
            <>
              <Stack.Screen name="Home" component={HomeScreen}
                options={{
                  headerTitle: (props) => <LogoTitle {...props} /> ,
                  gestureEnabled: true,
                  gestureDirection: 'horizontal',
                }}
              />
              <Stack.Group screenOptions={{
                headerShown: false,
                presentation: 'modal',
                gestureEnabled: true,
                gestureDirection: 'horizontal',
              }}>
                <Stack.Screen name="CartModal" component={CartModal}
                  options={{
                    presentation: 'transparentModal',
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    // gestureResponseDistance: 135,
                    // TransitionPresets: 'RevealFromBottomAndroid'
                  }}
                />
              </Stack.Group>
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
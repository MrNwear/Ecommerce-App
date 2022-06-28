import React from 'react';
import { AppContainer } from './src/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DEFAULT_ADDRESS_ID_KEY, TOKEN_KEY, USER_KEY } from './src/utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, selectDefaultAddress, setToken, setUser } from './src/redux/actions';
import { SELECT_DEFAULT_ADDRESS } from './src/redux/actions/actionTypes';
import { fetchCartItems } from './src/redux/actions/cartActions';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then((val) => {
      dispatch(setToken(val));
      SplashScreen.hide();
      if(val){

        axios.defaults.headers.Authorization = 'Bearer ' + token;
        dispatch(fetchCartItems());
        AsyncStorage.getItem(USER_KEY).then((val) => {
          dispatch(setUser(JSON.parse(val)));
          dispatch(getUserData());
        })
      }
    });
  }, [token]);
  React.useEffect(()=>{
    AsyncStorage.getItem(DEFAULT_ADDRESS_ID_KEY).then(val=>{
      dispatch(selectDefaultAddress(val));
    })
  },[])
  return (
    (token != '') && < AppContainer isAuthenticated={!!token} />
  );
}
export default App;
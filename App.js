import React from 'react';
import { AppContainer } from './src/Navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_KEY, USER_KEY } from './src/utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from './src/redux/actions';
const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);

  React.useEffect(() => {
    AsyncStorage.getItem(TOKEN_KEY).then((val) => {
      dispatch(setToken(val));
      axios.defaults.headers.Authorization = 'Bearer ' + token;
      AsyncStorage.getItem(USER_KEY).then((val) => {
        dispatch(setUser(JSON.parse(val)));
      })
    });
  }, []);
  return (
    (token != '') && < AppContainer isAuthenticated={!!token} />
  );
}
export default App;
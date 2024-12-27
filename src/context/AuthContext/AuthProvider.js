import { useState } from "react";
import AuthContext from "./AuthContext";
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const GoogleLogin = async () => {
  await GoogleSignin.hasPlayServices();

  let userInfo;
  try {
    userInfo = await GoogleSignin.signIn();
  } catch(err) {
    throw new Error(err);
  }
  return userInfo;
}

const AuthProvider = ({ children }) => {

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onLogin = async() => {
        setLoading(true);

        try {
            const userInfo = await GoogleLogin();
            const { data } = userInfo;
            const {idToken, user} = data;
            const {email, id, name} = user;

            setUserData({email, id, name, idToken});

        } catch(error) {
            console.log("Login error", error);
            setError(error);
        }

        setLoading(false);
    }

    const onLogout = async() => {
        setLoading(true);

        try {
            await GoogleSignin.signOut();
        } catch(error) {
            console.log("Logout error", error);
            setError(error);
        }


        setLoading(false);
    }

    return <AuthContext.Provider value={{userData, loading, error, onLogin, onLogout}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;
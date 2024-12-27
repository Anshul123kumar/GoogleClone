import React, {createContext} from "react";

const AuthContext = createContext({
    userData: null,
    loading: false,
    error: null,
    onLogin: () => {},
    onLogout: () => {},
});

export default AuthContext;
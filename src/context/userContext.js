import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

//context
const AuthContext = createContext();

//provider
const AuthProvider = ({ children }) => {
    //golbal state
    const [state, setState] = useState({
        user: null,
        token: "",
    })

    // initial local storage data
    useEffect(() => {
        const loadLocalStorageData = async () => {
            let data = await AsyncStorage.getItem("@auth");
            let loginData = JSON.parse(data)

            setState({ ...state, user: loginData?.user, token: loginData?.token })

            // console.log(state)
        }
        loadLocalStorageData()
    }, [])

    return (
        <AuthContext.Provider value={[state, setState]}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
import React, { ReactNode, createContext, useContext, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import theme from '../styles/theme';

export const ThemeContext = createContext(theme);

export const useTheme = () => {
    return useContext(ThemeContext);
};

interface ThemeContextProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};
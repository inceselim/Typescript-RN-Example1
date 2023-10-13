import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/homeScreen/HomeScreen';
import { useTheme } from '../context/ThemeContext';

const Stack = createNativeStackNavigator();

const MainNavigation: React.FC = () => {
    const theme: any = useTheme();
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default MainNavigation;
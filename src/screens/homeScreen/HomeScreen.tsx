import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../../styles/styles';
import { useTheme } from '../../context/ThemeContext';

export const HomeScreen: React.FC = () => {
    const theme = useTheme();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text>Home</Text>
                <View style={{ backgroundColor: theme.colors.primary }}>
                    <Text style={{ color: theme.colors.text }}>Bu bir örnek bileşen</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

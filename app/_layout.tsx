import { useTheme } from '@/shared/hooks/useTheme';
import { Stack } from 'expo-router';
import {  View } from 'react-native';

export default function RootLayout() {
    const {themeColors} = useTheme()
 
  return (
    <View style={{flex: 1, backgroundColor: themeColors?.background,
        paddingVertical: 32,
        paddingHorizontal: 18

    }}>
        <Stack  screenOptions={{
            contentStyle: {
                backgroundColor: 'transparent', 
             },
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            animation: 'slide_from_right',
            headerShown: false,
        }}>
            <Stack.Screen 
                name='welcome'
                options={{headerShown: false}}
            />
        </Stack>
    </View>
  );
}
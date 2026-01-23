
import { Tabs } from "expo-router";

import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/shared/constants/theme";


export default function TabsLayout () {
    
    return (
        <Tabs
            screenOptions={({route}) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors?.surface,
                    borderColor: Colors?.surface
                },
                tabBarActiveTintColor: Colors?.primary,
                tabBarInactiveTintColor: Colors?.textSecondary,
                sceneStyle: {
                    backgroundColor: Colors?.background
                },
                tabBarIcon: ({ color, size, focused }) => {
                let iconName: keyof typeof Ionicons.glyphMap;

                switch (route.name) {
                    case 'exerciseCatalog':
                    iconName = focused ? 'barbell' : 'barbell-outline';
                    break;
                    case 'index':
                    iconName = focused ? 'home' : 'home-outline';
                    break;
                    case 'profile':
                    iconName = focused ? 'person' : 'person-outline';
                    break;
                    default:
                    iconName = 'ellipse';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
                },
                
                
            })}
        >
            <Tabs.Screen name="exerciseCatalog" options={{title: 'Упражнения'}} />
            <Tabs.Screen name="index"   options={{title: 'Главная'}}/>
            <Tabs.Screen name="profile" options={{title: 'Профиль'}} />
            
        </Tabs>
    )
}
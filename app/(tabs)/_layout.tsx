import { useTheme } from "@/shared/hooks/useTheme";
import { Tabs } from "expo-router";

export default function TabsLayout () {
    const {themeColors} = useTheme()
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: themeColors?.surface
                },
                
            }}
        >
            <Tabs.Screen name="index" options={{title: 'Главная'}}/>
            
        </Tabs>
    )
}
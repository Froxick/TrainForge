import { useTheme } from "@/shared/hooks/useTheme";
import { Stack } from "expo-router";

export default function WelcomeLayout () {
    const {themeColors} = useTheme()
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                contentStyle: {
                    backgroundColor: themeColors?.background
                }
            }}
        />
    )
}

import { Colors } from "@/shared/constants/theme";
import { Stack } from "expo-router";

export default function WelcomeLayout () {
   
    return (
        <Stack 
            screenOptions={{
                headerShown: false,
                animation: "slide_from_right",
                contentStyle: {
                    backgroundColor:    Colors?.background,
                    paddingVertical: 32,
                     paddingHorizontal: 18
                }
            }}
        />
    )
}
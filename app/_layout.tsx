import { useTheme } from '@/shared/hooks/useTheme';
import { secureStoreUtil } from '@/shared/lib/secureStoreUtil';
import { Redirect, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import {  ActivityIndicator, View } from 'react-native';


export default function RootLayout() {
    const {themeColors} = useTheme()
    const [loading,setLoading] = useState(true)
    const[hasName,setHasName] = useState(false)

    useEffect(() => {
        const name = secureStoreUtil.getItem('name')
        if(name) {
            setHasName(true)
        }
        setLoading(false)
    },[])

  if(loading) {
    return (
         <View style={{flex: 1, backgroundColor: themeColors?.background,
            paddingVertical: 32,
            paddingHorizontal: 18

        }}>
            <ActivityIndicator size={'large'} color={themeColors?.secondary}/>
        </View>
    )
  }
  return (
    <View style={{flex: 1, backgroundColor: themeColors?.background,
        paddingVertical: 32,
        paddingHorizontal: 18

    }}>
    
        {!hasName && <Redirect href="/(welcome)/welcome" />}
        {hasName && <Redirect href="/(tabs)" />}
        <Stack screenOptions={{ headerShown: false, contentStyle: {
            backgroundColor : themeColors?.background,
            
        }
         }}  />
    
     </View>
  );
}
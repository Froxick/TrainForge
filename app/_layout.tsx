
import { database } from '@/db/schemaDb';
import { Colors } from '@/shared/constants/theme';

import { secureStoreUtil } from '@/shared/lib/secureStoreUtil';
import { seedExerciseCatalog } from '@/shared/lib/seedExerciseCatalog';
import { Redirect, Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import {  ActivityIndicator, View } from 'react-native';


export default function RootLayout() {
    
    const [loading,setLoading] = useState(true)
    const[hasName,setHasName] = useState(false)
    const [ready, setReady] = useState(false)

    useEffect(() => {
       const initializeApp = async () => {
            try {
               
                await database.initialize();
                console.log('Database initialized');
                
                
                await seedExerciseCatalog();
                console.log('Seeding completed');
                
                
                const name = secureStoreUtil.getItem('name');
                setHasName(!!name);
                
                
                setReady(true);
            } catch (error) {
                console.error('Initialization error:', error);
            } finally {
                setLoading(false);
            }
        };
        initializeApp()
    },[])

  if(loading && !ready) {
    return (
         <View style={{flex: 1, backgroundColor: Colors?.background,
            paddingVertical: 32,
            paddingHorizontal: 18

        }}>
            <ActivityIndicator size={'large'} color={Colors?.secondary}/>
        </View>
    )
  }
  return (
    <View style={{flex: 1, backgroundColor: Colors?.background,
        

    }}>
    
        {!hasName && <Redirect href="/(welcome)/welcome" />}
        {hasName && <Redirect href="/(tabs)" />}
        <Stack screenOptions={{ headerShown: false, contentStyle: {
            backgroundColor : Colors?.background,
             
            
        }
         }}  />
    
     </View>
  );
}
import * as SecureStore from 'expo-secure-store';


export const secureStoreUtil = {


    addItem (key: string,value: string) {
        SecureStore.setItem(key,value)
    },
    getItem (key: string) {
        const item = SecureStore.getItem(key)
        return item
    },
    async deleteItem (key: string)  {
        await SecureStore.deleteItemAsync(key)
    }

    
}
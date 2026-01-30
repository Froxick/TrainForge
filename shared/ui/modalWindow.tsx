import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Colors } from '../constants/theme';
import { ReactNode } from 'react';
interface ModalWindowProps {
    children: ReactNode,
    isVisible: boolean,
    onClose: () => void,
    title?: string,

}
const {  height: screenHeight } = Dimensions.get('window')
export const ModalWindow = ({isVisible,onClose,title,children} : ModalWindowProps) => {
   
    const styles = StyleSheet.create({
        modalContent: {
            backgroundColor: Colors.surface,
            borderRadius: 12,
            padding: 20,
            maxHeight: screenHeight* 0.8,
        },
        modalTitle: {
            color: Colors.text,
            textAlign: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            marginBottom: 15,
        }
    })
   
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
            animationIn="fadeIn"
            animationOut="fadeOut"
            backdropOpacity={0.7}
            style={{ margin: 20, justifyContent: 'center' }}
        >
            <View style={styles.modalContent}>
               
                {title && (
                    <Text style={styles.modalTitle}>
                        {title}
                    </Text>
                )}
                
                <ScrollView 
                    style={{ maxHeight: screenHeight * 0.6 }}
                    contentContainerStyle={{ flexGrow: 1 }}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            </View>
        </Modal>
    )
}
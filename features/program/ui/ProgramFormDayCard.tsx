import { Colors } from "@/shared/constants/theme"
import { useEffect, useRef } from "react";
import { 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View, 
    Animated,
} from "react-native"

interface ProgramFormDayCardProps {
    rest: boolean,
    onPress: () => void,
    text: string
}

export const ProgramFormDayCard = ({rest, onPress, text}: ProgramFormDayCardProps) => {
    const overlayOpacity = useRef(new Animated.Value(0)).current;
    const scaleValue = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(overlayOpacity, {
            toValue: rest ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [rest,overlayOpacity]);

    const handlePress = () => {
        Animated.sequence([
            Animated.timing(scaleValue, {
                toValue: 0.98,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(scaleValue, {
                toValue: 1,
                duration: 100,
                useNativeDriver: true,
            }),
        ]).start();
        
        onPress();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={handlePress}
                activeOpacity={0.9}
                style={{ transform: [{ scale: scaleValue }] }}
            >
                <View style={styles.card}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            </TouchableOpacity>
            
           
            <Animated.View 
                style={[
                    styles.restOverlay,
                    {
                        opacity: overlayOpacity,
                        transform: [{
                            scale: overlayOpacity.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0.95, 1]
                            })
                        }],
                        pointerEvents: 'none',
                    }
                ]}
            >
               
                <View style={styles.overlayBackground} />
                <View style={styles.restBadge}>
                    <Text style={styles.restText}>Отдых</Text>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
    },
    card: {
        backgroundColor: Colors.surface,
        padding: 18,
        borderRadius: 12,
        borderColor: Colors.border,   
        borderWidth: 1,
    },
    text: {
        color: Colors.text,
        fontSize: 17,
        paddingLeft: 2,
        fontWeight: 'bold',
    },
    restOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    overlayBackground: {
        ...StyleSheet.absoluteFillObject, 
        backgroundColor: 'rgba(11, 16, 9, 0.33)',
        borderRadius: 12,
    },
    restBadge: {
        backgroundColor: '#0e0e0d',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        marginRight: 20,
       
    },
    restText: {
        color: Colors.rpeLow,
        fontSize: 16,
        fontWeight: 'bold',
    }
})
import { Colors } from "@/shared/constants/theme"
import { Ionicons } from "@expo/vector-icons"
import { useState } from "react"
import { TouchableOpacity, View } from "react-native"
interface ExerciseCatalogRatingSelectorProps {
    initialRating : number
    onRatingChange: (rating: number) => void
    size: number
    maxRating: number
}
export const ExerciseCatalogRatingSelector = ({ 
    initialRating,
    onRatingChange,
    size,
    maxRating
} : ExerciseCatalogRatingSelectorProps) => {
    const[rating,setRating] = useState<number>(initialRating);
    const [tempRating, setTempRating] = useState(0)

    const handleRatingPress = (selectedRating: number) => {
        setRating(selectedRating)
        setTempRating(0)
        onRatingChange(selectedRating)
    }
    const handlePressIn = (starIndex: number) => {
        setTempRating(starIndex + 1)
    }
    const handlePressOut = () => {
        setTempRating(0)
    }

    const renderStars = () => {
        const stars = []
        const currentRating = tempRating || rating

        for(let i = 0;i < maxRating; i++) {
            const starValue = i + 1

            stars.push(
                <TouchableOpacity
                    key={i}
                    activeOpacity={0.7}
                    onPress={() => handleRatingPress(starValue)}
                    onPressIn={() => handlePressIn(i)}
                    onPressOut={handlePressOut}
                    style={{padding: 4}}
                >
                    <Ionicons
                        name={starValue <= currentRating ? "star" : "star-outline"}
                        size={size}
                        color={starValue <= currentRating ? '#dee414' : Colors.darkTextSecondary}
                    />
                </TouchableOpacity>
            )
        }
        return stars;

    }
    
    return (
        <View style={{ 
            flexDirection: 'row', 
            alignItems: 'center',
        }}>
        {renderStars()}
          
        </View>
    )
}
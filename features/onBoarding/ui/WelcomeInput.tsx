import { ColorsType } from "@/shared/types/ColorsType";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

interface WelcomeInputProps {
  colors?: ColorsType;
  placeholder: string;
  value: string;
  maxLength?: number;
  placeholderSub: string;
  onChange: (text:string) => void
}

export const WelcomeInput = ({
  colors,
  placeholder,
  value,
  maxLength = 14,
  placeholderSub,
  onChange
  
}: WelcomeInputProps) => {
  const [focused, setFocused] = useState(false);

  const isLimit = value.length >= maxLength;

  const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "relative",
      marginTop: 30
    },

    input: {
      height: 50,
      borderRadius: 14,
      paddingHorizontal: 18,
      fontSize: 16,
      textAlign: "center",

      color: colors?.text,
      backgroundColor: colors?.background,

      borderWidth: 1.5,
      borderColor: focused
        ? colors?.secondary
        : colors?.border,

      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: focused ? 0.2 : 0.05,
      shadowRadius: 8,
      elevation: focused ? 4 : 1,
    },

    counter: {
      position: "absolute",
      right: 12,
      bottom: -22,
      fontSize: 12,
      color: isLimit
        ? colors?.danger
        : colors?.textSecondary,
    },
    placeholderText : {
        position: "absolute",
        color: isLimit
        ? colors?.danger
        : colors?.textSecondary,
        top: -30,
        left: 5
    }   
  });

  return (
    <View style={styles.container}>
        <Text style={styles.placeholderText}>
            {placeholderSub}
        </Text>
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={colors?.textSecondary}
        style={styles.input}
        maxLength={maxLength}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />

      <Text style={styles.counter}>
        {value.length} / {maxLength}
      </Text>
    </View>
  );
};

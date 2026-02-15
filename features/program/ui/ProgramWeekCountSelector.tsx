import { FlatList, TouchableOpacity, Text, View, StyleSheet } from "react-native"
import { Colors } from "@/shared/constants/theme"

type Props = {
  value: number
  onChange: (value: number) => void
  max?: number
}

export const WeekCountSelector = ({ value, onChange, max = 12 }: Props) => {

  const weeks = Array.from({ length: max }, (_, i) => i + 1)
  const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 15
    },
    listContainer: {
        gap: 12,
        paddingHorizontal: 10,
    },
    item: {
        width: 60,
        height: 60,
        borderRadius: 22,
        backgroundColor: "#1e1e1e",
        justifyContent: "center",
        alignItems: "center",
    },
    activeItem: {
        backgroundColor: Colors.darkRed,
    },
    text: {
        fontSize: 18,
        color: Colors.text,
        fontWeight: "600",
    },
    activeText: {
        color: "#fff",
        fontWeight: "bold",
    },
    title: {
        color: Colors.text,
        fontWeight: 'bold',
        fontSize: 17,
        marginLeft: 10,
    }
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Количество недель
      </Text>
      <FlatList
        horizontal
        data={weeks}
        keyExtractor={(item) => item.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => {
          const isActive = item === value

          return (
            <TouchableOpacity
              style={[
                styles.item,
                isActive && styles.activeItem
              ]}
              onPress={() => onChange(item)}
            >
              <Text style={[
                styles.text,
                isActive && styles.activeText
              ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}
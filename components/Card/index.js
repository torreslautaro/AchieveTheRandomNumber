import { View, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  cardContainer : {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
})

const Card = ({children, style}) => {
  return(
    <View style={{...styles.cardContainer, ...style}}>
      {children}
    </View>
  )
}

export default Card
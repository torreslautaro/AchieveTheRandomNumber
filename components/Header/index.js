import { View, Text, StyleSheet } from "react-native"
import colors from "../../utils/colors"

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 25,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white
  }
})

const Header = ({title}) => {
  return(
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  )
}

export default Header
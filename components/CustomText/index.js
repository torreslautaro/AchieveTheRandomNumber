import { StyleSheet, Text } from "react-native";
import colors from "../../utils/colors";

const styles = StyleSheet.create({
  text: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: colors.text,
    fontSize: 22,
    fontFamily: 'Lato-Bold',
    color: colors.text
  }
})

const CustomText = ({children}) => {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

export default CustomText
import { Card,CustomText } from "../components"
import { StyleSheet, View, Button,Text } from "react-native"
import { useState } from "react"
import colors from "../utils/colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 25
  },
  cardContainer: {
    minWidth: 100,
    maxWidth: 280,
    paddingHorizontal: 10,
    paddingVertical: 25,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent : 'space-evenly',
    marginTop: 20
  },  
  title: {
    marginBottom: 20,
    fontSize: 18,
    fontFamily: 'Lato-Bold',
    color: colors.text
  }
})

generateRandomNumberBetween = (minNumber, maxNumber, exclude) => {
 const min = Math.ceil(minNumber)
 const max = Math.floor(maxNumber)
 const randomNumber = Math.floor(Math.random() * (max-min) + min)

 if(randomNumber === exclude) generateRandomNumberBetween(minNumber, maxNumber,exclude)

  return randomNumber

}

const Game = ({userNumber}) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomNumberBetween(1,100,userNumber))

  return(
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Text style={styles.title}>La suposicion del oponente</Text>
        <CustomText>{currentGuess}</CustomText>
        <View style={styles.buttonsContainer}>
          <Button color={colors.primary} title="Menor" onPress={() => null}/>
          <Button color={colors.secondary} title="Mayor"  onPress={() => null}/>
        </View>
      </Card>
    </View>
  )
}

export default Game
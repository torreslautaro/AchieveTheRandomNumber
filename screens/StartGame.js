import { View,Text,TextInput, Button, StyleSheet, TouchableWithoutFeedback ,Keyboard } from "react-native"
import { useState } from "react"
import { Card, CustomText } from "../components"
import colors from "../utils/colors"

const styles = StyleSheet.create({
  startGameContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
  cardContainer: {
    minWidth: 150,
    maxWidth: 280,
    marginBottom: 20,
    paddingVertical: 25,
    alignItems: 'center',
  },
  cardSelectedNumber: {
    minWidth: 100,
    maxWidth: 180,
    height: 120,
    paddingHorizontal: 5,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    marginBottom: 30,
    borderBottomWidth : 1,
    paddingHorizontal:10,
    textAlign:'center',
    fontSize: 25,
    borderBottomColor: 'black',
    color: colors.text
  },
  cardButtons: {
    width: '100%',
    flexDirection : 'row',
    justifyContent:'space-evenly'
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
    fontFamily: 'Lato-Black',
    color: colors.text
  }
})

const StartGame = ({onStartGame}) => {
  const [number, setNumber] = useState(null)
  const [numberConfirmed, setConfirmedNumber] = useState(0)

  const handleChangeNumber = numberInput => {
    setNumber(numberInput.replace(/[^0-9]/g, ''))
  }

  const handleConfirmedNumber = () => {
    const newConfirmedNumber = parseInt(number,10)
    if(isNaN(newConfirmedNumber) || newConfirmedNumber <= 0 || newConfirmedNumber > 99) return;
    setConfirmedNumber(number)
    setNumber('')
  }

  const handleStartGame = () => {
    onStartGame(numberConfirmed)
  }

  const handleCleanNumbers = () => {
    setNumber(null)
    setConfirmedNumber(null)
    Keyboard.dismiss()
  }

  return(
    <TouchableWithoutFeedback  onPress={() => Keyboard.dismiss()}>
      <View style={styles.startGameContainer}>
        <Text style={styles.title}>Ingresa un número para comenzar!</Text>
        <Card style={styles.cardContainer}>
          <TextInput 
            value={number} 
            style={styles.input} 
            placeholder="10" 
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handleChangeNumber} 
          />
          <View style={styles.cardButtons}>
            <Button color={colors.primary} title="Limpiar" onPress={handleCleanNumbers} />
            <Button color={colors.secondary} title="Confirmar" onPress={handleConfirmedNumber} />
          </View>
        </Card>
        {
          numberConfirmed ?
            <Card style={styles.cardSelectedNumber}>
            <CustomText style={styles.textNumber}>{numberConfirmed}</CustomText>
            <View style={styles.cardButtons}>
              <Button color={colors.secondary} title="Comenzar Juego" onPress={handleStartGame} />
            </View>
            </Card> : null
        }
      </View>
    </TouchableWithoutFeedback >
  )
}

export default StartGame
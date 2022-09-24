import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { useState } from 'react';
import { Header } from './components';
import StartGame from './screens/StartGame';
import Game from './screens/Game';
import { useFonts } from 'expo-font';


export default function App() {

  const [userNumber, setUserNumber] = useState(0)

  const [loaded] = useFonts({
    
    'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
    'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
    'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
    'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
  })

  const onStartGame = number => {
    setUserNumber(number)
  }

  let content = <StartGame onStartGame={onStartGame} />

  if(userNumber > 0) {
    content = <Game userNumber={userNumber} />
  } else {
    null
  }

  if(!loaded) return <ActivityIndicator />

  return (
    <View style={styles.container}>
      <Header title='Adivina el número!' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});


import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [currentTime, setCurrentTime] = useState(null);
  const [timerState, setState] = useState("Stop");
  var seconds = 0;
  var minutes = 0;
  var hours = 0;

  


  function startButtonHandler()
  {
    if(timerState === "Stop")
    {
      setState("Start");
      


    }
  }


  return (
    <View style={styles.container}>
      <Text>00:00:00</Text>
      <Button title='Start' onPress={startButtonHandler}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

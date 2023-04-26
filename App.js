import {View} from 'react-native'
import {Provider as PaperProvider} from'react-native-paper'
import { StatusBar } from 'expo-status-bar';

import Test from './screens/Test'

export default function App() {
  return (
    <PaperProvider>
      <View style={{flex: 1}}>
        <StatusBar style="auto" />
        <Test />
      </View>
    </PaperProvider>
  );
}

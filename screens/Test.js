import {useState} from 'react';
import { View } from 'react-native';
import { withTheme, Checkbox, Button, TextInput, Text } from 'react-native-paper';

import MyBanner from '../components/MyBanner';

function Test({theme}) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
  const [accept, setAccept] = useState(null)

  return (
    <View style={{ 
      flex: 1, 
      backgroundColor: theme.colors.surfaceVariant,
      paddingHorizontal: 16
    }}>
      <MyBanner theme={theme} accept={accept} styles={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%'
      }}/>

      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={email => setEmail(email)}
          mode='outlined'
          style={{width: '100%', marginBottom: 5}}
        />

        <TextInput
          label="Senha"
          value={password}
          onChangeText={password => setPassword(password)}
          mode='outlined'
          style={{width: '100%'}}
        />

        <View style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          width: '100%',
          flexDirection: 'row',
          paddingTop: 10,
        }}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          <Text>Aceitar termos e condições.</Text>
        </View>

        <Button
          mode="elevated"
          icon="send"
          uppercase
          style={{width: 240, paddingVertical: 2, marginTop: 36}}
          onPress={() => {
            setAccept(checked)
          }}
        >Login</Button>

      </View>
    </View>
  )
}

export default withTheme(Test);
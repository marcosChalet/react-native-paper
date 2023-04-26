import { Banner } from 'react-native-paper';

export default function MyBanner({theme, accept, styles}) {

  return (
    <Banner
      visible={!accept && accept !== null}
      style={[{
        marginTop: 90,
        marginHorizontal: 14,
        borderRadius: 20,
        backgroundColor: theme.colors.surfaceVariant,
        zIndex: 100,
      }, styles]}
      icon="alert"
    >
      Você deve aceitar os termos e condições!
    </Banner>
  )
}
import { StatusBar, View } from 'react-native';

// Styles
import { styles } from './config/theme/AppTheme';

// Screen
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';

export function App() {

  return(
    <View style={styles.backGround}>
      <StatusBar 
        barStyle={'light-content'}
        backgroundColor={'black'}/>
        
        <CalculatorScreen />
    </View>
  )

}


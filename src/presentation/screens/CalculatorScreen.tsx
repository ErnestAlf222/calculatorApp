import {   Text, View } from 'react-native';
import { CalculatorButton,  } from '../components/CalculatorButton';

import { styles, colors } from '../../config/theme/AppTheme';

// Hook
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {

  const  { number, prevNumber, formula, calculateResult, clean, buildNumber, deleteOperation, toggleSign,
           divideOperations, multiplyOperations, addOperations, subtractOperations } = useCalculator();


  return (

    <View style={styles.calculatorContainer}>
      <View style={{ paddingBottom:20 }}>
        <Text 
            adjustsFontSizeToFit
            numberOfLines={1}
            style={ styles.mainResult }>{ formula }
        </Text>
        {
          (formula === prevNumber ) 
            ? <Text style={styles.subResult}></Text>
            : (
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1} 
                    style={ styles.subResult }> { prevNumber }
                </Text>

            ) 
        }

      </View>
      <View style={styles.row}>

        <CalculatorButton onPress={() => clean() } blackText label='C' color= { colors.lightGray } />
        <CalculatorButton onPress={() => toggleSign() } blackText label='+/-' color= { colors.lightGray } />
        <CalculatorButton onPress={() => deleteOperation() } blackText label='del' color= { colors.lightGray } />
        <CalculatorButton onPress={() => divideOperations() } label='÷' color= { colors.orange }/>
        
      </View>
      <View style={styles.row }>
        <CalculatorButton onPress={() => buildNumber('7') } label='7'  />
        <CalculatorButton onPress={() => buildNumber('8') } label='8'  />
        <CalculatorButton onPress={() => buildNumber('9') } label='9'  />
        <CalculatorButton onPress={() => multiplyOperations()  } label='x' color= { colors.orange } />

      </View>
      <View style={styles.row }>
        <CalculatorButton onPress={() => buildNumber('4') } label='4'  />
        <CalculatorButton onPress={() => buildNumber('5') } label='5'  />
        <CalculatorButton onPress={() => buildNumber('6') } label='6'  />
        <CalculatorButton onPress={() => subtractOperations() } label='-' color= { colors.orange } />

      </View>
      <View style={styles.row }>
        <CalculatorButton onPress={() => buildNumber('1') } label='1'  />
        <CalculatorButton onPress={() => buildNumber('2') } label='2'  />
        <CalculatorButton onPress={() => buildNumber('3') } label='3'  />
        <CalculatorButton onPress={() => addOperations() } label='+' color= { colors.orange } />

      </View>
      <View style={styles.row }>
        <CalculatorButton onPress={() => buildNumber('0') } label='0' doubleSize />
        <CalculatorButton onPress={() => buildNumber('.') } label='.'  />
        <CalculatorButton onPress={() => calculateResult() } label='='  color= { colors.orange } />

      </View>
    </View>
  )
}


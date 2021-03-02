import {StyleSheet} from 'react-native';
import color from '../../../assets/themes/color';

// export default StyleSheet.({
//  
// })
export default StyleSheet.create({
    wrapper: {
              height: 42,
              borderColor: color.grey,
              borderWidth: 1,
              borderRadius: 4,
              flexDirection: 'row',
              paddingHorizontal: 5,
        },
    textInput: {
        backgroundColor: 'red',
        flex: 1,
    }
})
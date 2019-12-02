import {
    Platform,
    StyleSheet,
    Dimensions
  } from 'react-native';

  const Height = Math.round(Dimensions.get('window').height);

  const styles = StyleSheet.create ({

    container :{
       // flexGrow : 1,
        height : Height *  0.1 ,
       // backgroundColor :'#000000',
        justifyContent : 'center',
        alignItems : 'center'
    },
    text :{
        color : 'gray',
        fontSize : 17,
        fontFamily : 'Iowan Old Style',
        letterSpacing : 2.0
    }
  })

  export default styles ;
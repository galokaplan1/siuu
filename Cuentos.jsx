import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import axios from 'axios';

const Cuentos =({navigation})=>{

  const [cuentos, setcuentos] = useState([]);

  useEffect(() => {
    axios
        .get("https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=f876f842ee604610b4ca54f02051426a")
        .then((response) => {
          console.log(response.data)
            setcuentos(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    
    <View style={styles.fondo}>
      <View style={styles.margen}>
      {cuentos.map(obj => <Boton
          text={obj.name}
          onPress={ () =>{
              navigation.navigate('DescripcionCuentos',{id:obj.Id_Equipment})
            }}></Boton>)}

      </View>
    </View>
    
  );
}
  
  export default Cuentos
  
  const styles = StyleSheet.create({
    logo: {
      width: '70%',
      height: '25%',
      position: 'absolute',
      top: '20%',
      left:'15%'
  },
    image: {
      height:'100%',
      alignItems: 'center',
    },
    titulo: {
      position: 'absolute',
      top: '45%',
      color: 'blue',
      fontSize: 20
    },
    fondo: {
      backgroundColor : "#7fffd4",
      flex: 1,
    },
    margen:{
        marginTop: '25%'
    }
  });
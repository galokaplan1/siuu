import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { TabRouter, useNavigation } from '@react-navigation/native';
import Boton from '../components/Boton';
import { useEffect,useState }from 'react';
import axios from 'axios';
import Carta from '../components/Card';
  
const DescripcionCuentos =({navigation, route})=>{

  const [descuentos, setdescuentos] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:5000/contenidos/contenidos/" + route.params.id)
        .then((response) => {
          console.log(response.data)
            setdescuentos(response.data);
        });
  }, [])
  
  navigation = useNavigation();

  return (
    
    <View style={styles.fondo}>
      <View style={styles.margen}>
        <Carta
         title={descuentos.titulo}
         text={descuentos.descripcion}
        >

        </Carta>
      </View>

    </View>



    
  );
}

  
  export default DescripcionCuentos;
  
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
      color: 'black',
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
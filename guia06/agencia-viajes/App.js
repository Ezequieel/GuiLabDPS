import React from 'react';
import {View, StyleSheet,Image, Text, ScrollView, Modal, Button, TouchableHighlight} from 'react-native';
const App = () =>{
  const [modalVisible, setModalVisible] = React.useState(false);
 return(
 <>
 <ScrollView>


 <Modal transparent={true} animationType="slide" visible={modalVisible} onRequestClose={() => {
  alert("Modal has been closed.");
  }}>
  <View style={styles.VistaModal}>
    <View style={styles.Modal}>
      <Text style={styles.Subtitulo}>Ir a la playa</Text>
      <Text>El Salvador cuenta  con hermosas playas a nivel Centroamérica</Text>
      <Button title="Cerrar" onPress={() => {setModalVisible(!modalVisible);}} />
    </View>
  </View>
</Modal>

  <Text style={styles.titulo}>Platillos Salvadoreños</Text>
  <View>

  <View>
    <Image 
    style={styles.mejores} 
    source={require('./src/img/mejores1.jpg')} />
  </View>

  <View>
    <Image 
    style={styles.mejores} 
    source={require('./src/img/mejores2.jpg')} />
  </View>

  <View>
    <Image 
    style={styles.mejores} 
    source={require('./src/img/mejores3.jpg')} />
  </View>

  </View>

  <Text style={styles.titulo}>Rutas Turisticas</Text>
  <View style={styles.listado}> 
    <View style={styles.listaItem}>
      <Image 
      style={styles.mejores} 
      source={require('./src/img/ruta1.jpg')} />
    </View>

    <View style={styles.listaItem}>
      <Image 
      style={styles.mejores} 
      source={require('./src/img/ruta2.jpg')} />
    </View>

    <View style={styles.listaItem}>
      <Image 
      style={styles.mejores} 
      source={require('./src/img/ruta3.jpg')} />
    </View>

    <View style={styles.listaItem}>
      <Image 
      style={styles.mejores} 
      source={require('./src/img/ruta4.jpg')} />
    </View>
  </View>
 </ScrollView>

<View style={{flexDirection:'row'}}>
  <Image style={styles.banner} source={require('./src/img/bg.jpg')} />
</View>

<View style={styles.contenedor}>
  <Text style={styles.titulo}>Que hacer en El Salvador</Text>
  <ScrollView horizontal>
    <View>
      <TouchableHighlight onPress={() => {setModalVisible(true);}}>
      <Image
       style={styles.ciudad} 
       source={require('./src/img/actividad1.jpg')} 
      />
      </TouchableHighlight>
</View>

    <View>
      <Image
       style={styles.ciudad} 
       source={require('./src/img/actividad2.jpg')} 
       />
    </View>

    <View>
      <Image
       style={styles.ciudad} 
       source={require('./src/img/actividad3.jpg')} 
       />
    </View>

    <View>
      <Image
       style={styles.ciudad} 
       source={require('./src/img/actividad4.jpg')} 
       />
    </View>

    <View>
      <Image
       style={styles.ciudad} 
       source={require('./src/img/actividad5.jpg')} 
       />
    </View>
  </ScrollView>
</View>



</>

 );
};

const styles = StyleSheet.create({
banner:{
 height:250,
 flex:1
},
titulo:{
  fontSize:24,
  fontWeight:'bold',
  marginVertical:10
},
contenedor:{
  marginHorizontal:10
},
ciudad:{
  width:250,
  height:300,
  marginRight:10
},
mejores:{
  width:'100%',
  height:200,
  marginVertical:5
},

listaItem:{
  flexBasis:'49%'
},

listado:{
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
},

VistaModal:{
  backgroundColor:'#000000aa',
  flex:1
},

Modal:{
  backgroundColor:'#fff',
  margin:50,
  padding:40,
  borderRadius:10,
  flex:1
},

Subtitulo:{
  fontSize:14,
  fontWeight:'bold',
  justifyContent:'center'
}

});
export default App;
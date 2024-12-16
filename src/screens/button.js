
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.btn1}>
    <Text style={styles.btnText}>Button 1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn2}>
    <Text style={styles.btnText}>Button 2</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn3}>
    <Text style={styles.btnText}>Button 3</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn4}>
    <Text style={styles.btnText}>Button 4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn5}>
    <Text style={styles.btnText2}>Button 5</Text>
    </TouchableOpacity>
</View>
  );
}
const styles = StyleSheet.create({
  container:{flex:1,justifyContent:'center',alignItems:'center'},
  btn1:{
      width:200,
      height:50,
      backgroundColor:'red',
      justifyContent: 'center',
      alignItems: 'center', 
  },
  btn2:{
    width:'90%',
    height:'6%',
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center', 
    marginTop:20,
},
btn3:{
  width:'90%',
  height:'6%',
  backgroundColor:'red',
  justifyContent: 'center',
  alignItems: 'center', 
  marginTop:20,
  borderRadius:10
},
btn4:{
  width:'90%',
  height:'6%',
  backgroundColor:'red',
  justifyContent: 'center',
  alignItems: 'center', 
  marginTop:20,
  borderTopRightRadius:20,
  borderBottomLeftRadius:20
},
btn5:{
  width:'90%',
  height:'6%',
  // backgroundColor:'red',
  borderColor:'red',
  borderWidth:1,
  justifyContent: 'center',
  alignItems: 'center', 
  marginTop:20,
  borderTopRightRadius:20,
  borderBottomLeftRadius:20
},
  btnText: {
    color: 'white',
    fontSize: 18,
  },
  btnText2: {
    color: 'red',
    fontSize: 18,
  },
})
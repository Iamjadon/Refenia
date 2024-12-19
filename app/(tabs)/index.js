import { useRouter } from "expo-router";
import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const index = () => {
  const router = useRouter();
  // Navigation handler
  const handleGetStarted = () => {
    router.push("/LoginPage");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/frontPage.jpg")}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.textContainer}>
            <Text style={styles.heading}>
              Manage Your <Text style={styles.greenText}>Solar</Text>
            </Text>
            <Text style={[styles.heading, styles.greenText]}>
              Power Generation
            </Text>
            <Text style={styles.heading}>At One Place</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
            <Text style={styles.buttonText}>Lets Get Started 	</Text>
            <Text style={styles.arrow}>&rarr;</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  body:{
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "space-between",
  },
  overlay: {
    flex: 1,
    // backgroundColor: "rgba(255, 255, 255, 0.5)",
    justifyContent: "space-between",
    paddingVertical: 80,
    paddingHorizontal: 20, 
  },
  textContainer: {
    alignItems: "flex-start", 
  },
  heading: {
    fontSize: 38,
    fontWeight: "bold",
    color: "black",
    lineHeight: 36,
    margin:5
  },
  greenText: {
    color: "green",
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 0, 
    paddingHorizontal: 60, 
    borderRadius: 30, 
    alignItems: 'center', 
    alignSelf: 'center', 
    flexDirection: 'row',
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    // marginRight: 10, 

  },
  arrow: {
    color: 'white',
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom:10,
 
  },
});

export default index;

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Feather from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [fullName, setFName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });
  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        username: val,
        fullName: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        fullName: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const createAccount = async () => {
    alert("click")
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.logoView}>
          <Text style={styles.logoText}>P</Text>
        </View>
        <Text style={styles.text}>Create an Account</Text>
        <Text style={{ marginTop: 10 ,fontSize:16 }}>Welcome to Community</Text>
      </View>

     <View style={{marginTop:30}}>
     <View style={styles.action}>
     <Feather name="user" color="grey" size={20} />
     <TextInput
       placeholder="Full Name"
       // secureTextEntry={data.secureTextEntry ? true : false}
       style={styles.textInp}
       autoCapitalize="none"
       onChangeText={(val) => textInputChange(val)}
     />
   </View>
   <View style={styles.action}>
     <Feather name="mail" color="grey" size={20} />
     <TextInput
       placeholder="Email Address"
       // secureTextEntry={data.secureTextEntry ? true : false}
       style={styles.textInp}
       autoCapitalize="none"
       onChangeText={(val) => textInputChange(val)}
     />
   </View>
   <View style={styles.action}>
     <Feather name="phone" color="grey" size={20} />
     <TextInput
       placeholder="Mobile No."
       // secureTextEntry={data.secureTextEntry ? true : false}
       style={styles.textInp}
       autoCapitalize="none"
       keyboardType="phone-pad"
       onChangeText={(val) => setPassword(val)}
     />
   </View>
   <View style={styles.action}>
     <Feather name="lock" color="grey" size={20} />
     <TextInput
       placeholder="Password"
       // secureTextEntry={data.secureTextEntry ? true : false}
       style={styles.textInp}
       autoCapitalize="none"
       secureTextEntry={data.secureTextEntry ? true : false}
       onChangeText={(val) => handlePasswordChange(val)}
     />
     <TouchableOpacity
       onPress={updateSecureTextEntry}
       style={{ marginTop: 5 }}
     >
       {data.secureTextEntry ? (
         <Feather name="eye-off" color="grey" size={20} />
       ) : (
         <Feather name="eye" color="grey" size={20} />
       )}
     </TouchableOpacity>
   </View>
     </View>
      <TouchableOpacity
        style={styles.submitBtn}
         onPress={createAccount}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold",}}>Create Account</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: "#C4C4C4" }]}>
          Already have an account?
        </Text>
        <TouchableOpacity
        onPress={()=>navigation.navigate('SignInScreen')}>
          <Text style={[styles.footerText, { color: "#0994C0" }]}>    Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FAFB",
    flex: 1,
    padding: 10,
  },
  headerView: {
    // position: "absolute",
    // top: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  textInp: {
    paddingLeft: 20,
    color: "#A8AFB9",
    flex: 1,
    height: 50,
    color:'black'
  },
  action: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 5,
    width: "95%",
    height: 50,
    marginTop: 20,
    elevation: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  logoView: {
    width: 70,
    height: 70,
    borderRadius: 50,
    overflow: "hidden",
    backgroundColor: "#3691c9",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "white",
    fontSize: 40,
  },
  text: {
    color: "black",
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  submitBtn: {
    width: "95%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#0994C0",
    marginTop: 50,
  },
  footer: {
    flexDirection: "row",
    marginTop: 50,

  },
  footerText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

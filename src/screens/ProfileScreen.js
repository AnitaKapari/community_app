import {
  StyleSheet,
  Image,
  Text,
  View,
  Platform,
  TextInput,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import Header from "../components/Header";

export default function ProfileScreen() {
  const navigation = useNavigation();

  const [checked, setChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");

  const onSubmitDetails = async () => {
    alert("click");
  };

  return (
    <View style={styles.container}>
      <Header headerText={"Notifications"} iconName={"arrow-back"}></Header>

      <ScrollView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              padding: 5,
              alignItems: "center",
              backgroundColor: "white",
              height: 95,
              width: 95,
              borderRadius: 60,
              margin: 10,
            }}
          >
            <Image
              source={require("../../assets//images/icon_user.png")}
              style={{ height: 90, width: 90 }}
            />
          </View>
          <View style={styles.viewContainer}>
            <TextInput
              placeholder=" First Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setFirstName(val)}
              defaultValue="Anita"
            />
          </View>

          <View style={styles.viewContainer}>
            <TextInput
              placeholder=" Last Name"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setLastName(val)}
              defaultValue="Kapari"
            />
          </View>

          <View style={styles.viewContainer}>
            <TextInput
              placeholder=" Phone Number"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setMobile(val)}
              defaultValue="9988776655"
            />
          </View>
          <View style={styles.viewContainer}>
            <TextInput
              placeholder=" Email"
              style={styles.textInput}
              autoCapitalize="none"
              editable={false}
              onChangeText={(val) => setEmail(val)}
              defaultValue="a@gmail.com"
            />
          </View>
          <View style={styles.viewContainer}>
            <TextInput
              placeholder=" Enter Age"
              style={styles.textInput}
              autoCapitalize="none"
              onChangeText={(val) => setAge(val)}
            />
          </View>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
                console.log(checked ? "unchecked" : "checked");
              }}
            />
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Text style={{ color: "grey",fontSize:12,marginTop:2 }}>
                By continuing,I confirm that i have read & agree to 
              </Text>
              <View style={{ flexDirection: "row",justifyContent:'center', }}>
                <Text style={{ color: "grey" }}> the </Text>
                <Text style={{  color: "black" }}>
                  Terms & conditions
                </Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.submitBtn} onPress={onSubmitDetails}>
            <Text  style={{  color: "white" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    padding: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
     marginBottom: 20,
     marginTop: 30,
    // flexWrap: "wrap",
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    color: "#05375a",
    fontSize: 15,
  },
  viewContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
    marginTop: 20,
    marginLeft: 20,
  },

  submitBtn: {
    width: "90%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "#0994C0",
    marginTop: 30,
  },
});

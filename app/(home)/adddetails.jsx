import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    TextInput,
    Pressable,
    Alert,
} from "react-native";
import React, { useState } from "react";
import axios from "axios";

const adddetails = () => {
    const [name, setName] = useState("asda");
    const [employeeId, setEmployeeId] = useState("asdasd");
    const [dob, setDob] = useState("asdasd");
    const [mobileNo, setMobileNo] = useState("asdad");
    const [joiningDate, setJoiningDate] = useState("asdasda");
    const [salary, setSalary] = useState("asdasd");
    const [address, setAddress] = useState("adsdadsa");
    const [designation, setDesignation] = useState("adasdadad");
    const handleRegister = async () => {

        try {
            const employeeData = {
                employeeName: name,
                employeeId: employeeId,
                designation: designation,
                phoneNumber: mobileNo,
                dateOfBirth: dob,
                joiningDate: joiningDate,
                activeEmployee: true,
                salary: salary,
                address: address,
            };

            await axios.post('https://api-employee.onrender.com/addEmployee', employeeData);

            Alert.alert(
                "Success",
                "Employee Added Successfully",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") },
                ],
                { cancelable: false }
            );
        } catch (error) {
            console.log(error);
        }

    };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                    Add a New Employee
                </Text>

                <TextInput
                    style={{
                        padding: 10,
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        marginTop: 10,
                        borderRadius: 5,
                    }}
                    placeholder="India"
                    placeholderTextColor={"black"}
                />

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Full Name (First and last Name)
                    </Text>
                    <TextInput
                        value={name}
                        onChangeText={(text) => setName(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="enter your name"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Employee Id</Text>
                    <TextInput
                        value={employeeId}
                        onChangeText={(text) => setEmployeeId(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Employee Id"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Designation</Text>
                    <TextInput
                        value={designation}
                        onChangeText={(text) => setDesignation(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Designation"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Mobile Number
                    </Text>
                    <TextInput
                        value={mobileNo}
                        onChangeText={(text) => setMobileNo(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Mobile No"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                        Date of Birth
                    </Text>
                    <TextInput
                        value={dob}
                        onChangeText={(text) => setDob(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Enter Date of Birth"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Joining Date</Text>
                    <TextInput
                        value={joiningDate}
                        onChangeText={(text) => setJoiningDate(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Joining Date"
                        placeholderTextColor={"black"}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 10,
                    }}
                >
                    <Text>Active Employee</Text>
                    <Text>True</Text>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Salary</Text>
                    <TextInput
                        value={salary}
                        onChangeText={(text) => setSalary(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Enter Salary"
                        placeholderTextColor={"black"}
                    />
                </View>

                <View>
                    <Text style={{ fontSize: 17, fontWeight: "bold" }}>Address</Text>
                    <TextInput
                        value={address}
                        onChangeText={(text) => setAddress(text)}
                        style={{
                            padding: 10,
                            borderColor: "#D0D0D0",
                            borderWidth: 1,
                            marginTop: 10,
                            borderRadius: 5,
                        }}
                        placeholder="Enter Address"
                        placeholderTextColor={"black"}
                    />
                </View>

                <Pressable
                    onPress={handleRegister}
                    style={{
                        backgroundColor: "#436850",
                        padding: 10,
                        marginTop: 20,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 5,
                    }}
                >
                    <Text style={{ fontWeight: "bold", color: "white" }}>
                        Add Employee
                    </Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default adddetails;

const styles = StyleSheet.create({});
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const employees = () => {
    const [employees, setEmployees] = useState([]);
    const [input, setInput] = useState("");
    const router = useRouter();
    useEffect(() => {
        const fetchEmployeeData = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setEmployees(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchEmployeeData();
    }, []);
    console.log(employees);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white' }}>
                <Ionicons style={{ marginLeft: 10 }} name="arrow-back" size={24} color="black" />
                <Pressable style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 7, gap: 10, backgroundColor: 'white', height: 40, borderRadius: 4 }}>
                    <AntDesign name="search1" size={20} color="black" />
                    <TextInput value={input} onChangeText={(text) => setInput(text)} placeholder="Search" style={{ flex: 1 }} />

                    {employees.length > 0 && (
                        <View>
                            <Pressable>
                                <AntDesign name="pluscircle" size={24} color="black" />
                            </Pressable>
                        </View>
                    )}
                </Pressable>
            </View>
            <Pressable onPress={() => router.push('/(home)/adddetails')}>
                <AntDesign name="pluscircle" size={24} color="black" />
            </Pressable>
        </View>
    )
}

export default employees

const styles = StyleSheet.create({})
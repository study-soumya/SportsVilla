import React from "react";
import {
    View, TextInput, StyleSheet, TextInputProps
} from 'react-native';

interface CustomInputProps extends TextInputProps {
    placeholder: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ placeholder, ...props }) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                placeholderTextColor="#999"
                {...props}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginVertical: 10,
        paddingHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    input: {
        height: 50,
        fontSize: 16,
        color: '#000',
    },
});

export default CustomInput;

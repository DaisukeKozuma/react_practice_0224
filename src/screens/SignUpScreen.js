import React from 'react';
import { StyleSheet, View, TextInput, Text, TouchableHighlight } from 'react-native';

class SignUpScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    新規会員登録
                    </Text>
                <TextInput style={styles.input} value="Maildress" />
                <TextInput style={styles.input} value="Password" />
                <TouchableHighlight style={styles.button} onPress={() => { }} underlayColor="#A1DDB9">
                    <Text style={styles.buttonTitle}>送信する</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 24,
        backgroundColor: '#fff',
    },
    input: {
        backgroundColor: '#eee',
        height: 48,
        marginBottom: 16,
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 8,
    },
    title: {
        fontSize: 24,
        alignSelf: "center",
        marginBottom: 28,
    },
    button: {
        backgroundColor: '#A1DDB9',
        height: 48,
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
        width: '70%',
        alignSelf: "center",
    },
    buttonTitle: {
        color: '#fff',
        fontSize: 18,
    },
});





export default SignUpScreen;
import React from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from './style'

const Input = ({style, onChangeText, iconPosition, value, label, icon}) => {
    return (
        <View style={styles.inputContainer}>
            {label && <Text>{label}</Text>}
            <View style={styles.wrapper}>
                <View>
                    {icon && icon}
                </View>
                <TextInput
                    style={[styles.textInput, style]}
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
            
        </View>
    )
}

export default Input

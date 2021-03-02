import React from 'react';
import { View, Text, TextInput } from 'react-native';
import Container from '../../components/common/container';
import Input from '../../components/common/input';

const Login = () => {
    const [value, onChangeText] = React.useState('');
    return (
        <Container>
          
            <Input
                label='Username'
                onChangeText={(text) => onChangeText(text)}
                value={value}
                icon={<Text>Hide</Text>}
                iconPosition='right'
            />
        </Container>
    )
}

export default Login ;
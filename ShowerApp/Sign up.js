import React from 'react';
import { View, Text, TextInput } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

<View 
style={{
    flexDirection:'row',
    borderBottonColor:'#ccc',
    borderBottomWidth: 1,
    paddingBotton: 8,
    marginBottom: 25,
    }}>
    <MaterialIcons 
    name='alternate-email' 
    size={20} 
    color="#666" 
    style={{marginRight: 5}}/>
    <TextInput 
    placeholder = 'Email ID' 
    style={{flex:1,paddingVertical:0}} 
    keyboardType = "email-address"
    />
</View>

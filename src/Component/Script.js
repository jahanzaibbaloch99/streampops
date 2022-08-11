import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Script = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#1B1B1B'}}>
      <View style={{marginHorizontal: 8}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FDFDFD',
            paddingVertical: 32,
            alignItems: 'center',
            marginVertical: 8,
            borderRadius: 4,
          }}>
          <Text>English</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FDFDFD',
            paddingVertical: 32,
            alignItems: 'center',
            borderRadius: 4,
          }}>
          <Text>Spanish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FDFDFD',
            paddingVertical: 32,
            alignItems: 'center',
            marginVertical: 8,
            borderRadius: 4,
          }}>
          <Text>Chinese</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FDFDFD',
            paddingVertical: 32,
            alignItems: 'center',
            borderRadius: 4,
          }}>
          <Text>French</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Script;

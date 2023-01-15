import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const Home = () => {
  const [text, onChangeText] = useState('Enter a meeting id');
  const [text1, onChangeText1] = useState('Enter a meeting id');
  const [number, onChangeNumber] = useState(null);
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1 / 2}}>
        <Text style={{top: 20, fontSize: 22, left: 20}}>Start a meeting</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            top: 100,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          onPress={() => {
            Alert.alert('Meeting started');
          }}>
          <Text style={{color: 'white'}}>Click to start a meeting</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1 / 2}}>
        <Text style={{top: 20, fontSize: 22, left: 20}}>Join a meeting</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText1}
          value={text1}
        />
        <TouchableOpacity
          style={{
            width: '50%',
            height: 50,
            top: 100,
            backgroundColor: 'blue',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
          }}
          onPress={() => {
            Alert.alert('Meeting joined!');
          }}>
          <Text style={{color: 'white'}}>Click to join a meeting</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    top: 50,
  },
});

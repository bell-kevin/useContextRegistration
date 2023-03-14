import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from '../context/userContext';

export default function HomeScreen() {
  const navigation = useNavigation();
  const { firstName, lastName } = React.useContext(UserContext);

  const handlePress = () => {
    navigation.navigate('Name');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Registration</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>
          Please verify your information:
        </Text>
        <Text style={styles.contentText}>
          Name: {firstName} {lastName}
        </Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    height: 60,
    width: '100%',
    backgroundColor: '#bbb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  contentText: {
    fontSize: 20,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#bbb',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

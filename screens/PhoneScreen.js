import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserContext from '../context/userContext';

const PhoneScreen = () => {
  const userNameCtx = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify your phone</Text>
      <Text>{userNameCtx.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default PhoneScreen;

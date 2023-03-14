import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import UserContext from '../context/userContext';

const NameScreen = () => {
  const userNameCtx = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify your name</Text>
      <Text>{userNameCtx.firstName} {userNameCtx.lastName}</Text>
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

export default NameScreen;

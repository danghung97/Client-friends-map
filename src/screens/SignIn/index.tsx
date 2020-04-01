import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

function SignIn() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text>FRIENDS MAP</Text>
      </View>
      <View style={styles.groupButton}>
        <TouchableOpacity style={styles.button}>
          <Text>Login with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.colorPhone]}>
          <Text>Phone Number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
    padding: 22,
    paddingVertical: 6,
  },
  container: {
    flex: 1,
  },
  logo: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  groupButton: {
    marginTop: 150,
    alignSelf: 'center',
  },
  colorPhone: {
    color: 'skyblue',
  },
});

export default SignIn;

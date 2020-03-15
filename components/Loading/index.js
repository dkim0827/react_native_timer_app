import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require("./avocoders.png")} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#228B22",
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    flex: 1
  }
});

export default Loading;

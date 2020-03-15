import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import Loading from "./components/Loading";
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

let store = createStore(reducer);

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  );
};
export default App;

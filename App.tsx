import axios from 'axios';
import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

function App(): JSX.Element {
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await axios.get('https://alopeyk.example.com/get');
    console.log(res);
  };

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

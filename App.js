import React, { useState } from 'react';

import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'Prapti', key: '1' },
    { name: 'Bushra', key: '2' },
    { name: 'Jenisha', key: '3' },
    { name: 'Sanjida', key: '4' },
    { name: 'Mim', key: '5' },
    { name: 'Atifa', key: '6' },
    { name: 'Walif', key: '7' },
    { name: 'Wafi', key: '8' },

  ]);
  return (
    <View style={styles.container}>
      <FlatList

        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>

        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});

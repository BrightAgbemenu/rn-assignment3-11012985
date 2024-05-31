import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello, Devs</Text>
          <Text style={styles.tasks}>14 tasks today</Text>
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Image
            source={require('./assets/Profile.png')}
            style={styles.profileIcon}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E1',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 60,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 20,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  tasks: {
    fontSize: 30,
    color: '#000',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  filterButton: {
    marginLeft: 15,
    padding: 12,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
  },
});

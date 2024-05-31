import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView, TouchableOpacity } from 'react-native';

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

      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <TouchableOpacity style={styles.filterButton}>
          <Image source={require('./assets/Filter.jpg')} style={styles.filterIcon} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal={true} style={styles.horizontalScroll} showsHorizontalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/Gaming.png')}
            />
            <Text style={styles.categoryTitle}>Game</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/Eating.jpg')}
            />
            <Text style={styles.categoryTitle}>Eat</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/Skating.jpg')}
            />
            <Text style={styles.categoryTitle}>Skate</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/Exercise.png')}
            />
            <Text style={styles.categoryTitle}>Exercise</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/Paragliding.jpg')}
            />
            <Text style={styles.categoryTitle}>Paraglide</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/Wrestling-removebg-preview.png')}
            />
            <Text style={styles.categoryTitle}>Wrestle</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard}>
            <Image
              style={styles.categoryImage}
              source={require('./assets/Studying.png')}
            />
            <Text style={styles.categoryTitle}>Study</Text>
            <Text style={styles.categoryTasks}>12 Tasks</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  searchInput: {
    flex: 2,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#FFF',
    fontSize: 18,
  },
  filterIcon: {
    width: 24,
    height: 24,
  },
  horizontalScroll: {
    flexGrow: 0,
  },
  sectionTitle :{
    fontWeight:'bold',
    fontSize: 20,
  },
  categoriesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: '40%',
    height: 250,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginRight: 40,
  },
  categoryImage: {
    width: 150,
    height: 150,
    margin: 10,
    paddingVertical: 20,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  categoryTasks: {
    color: '#888',
  },
});

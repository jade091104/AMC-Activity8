import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.profileSection}>
<Image 
  source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Kobe_Bryant_8.jpg' }} 
  style={styles.image} 
/>

        <Text style={styles.title}>Edifer Jade D. Balbin</Text>
        <Text style={styles.subtitle}>Software Developer | Student</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Education</Text>
        <Text style={styles.content}>Bachelor of Science in Information Technology - Global Reciprocal College (2022 - )</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>About Me</Text>
        <Text style={styles.content}>I am very focus on the things i need to learn and to accomplish</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Projects</Text>
        <Text style={styles.content}>Portfolio Website, E-Barangay and Online Enrollment System</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.heading}>Skills</Text>
        <Text style={styles.content}>JavaScript, React, Python, JavaScript</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    paddingVertical: 40, 
    alignItems: 'center', 
    backgroundColor: '#040273' 
  },

  profileSection: { 
    width: '90%', 
    backgroundColor: 'gray', 
    padding: 25, 
    borderRadius: 15, 
    marginBottom: 20, 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 5, 
    elevation: 5 
  },

  image: { 
    width: 100,
    height: 130, 
    borderRadius: 65, 
    marginBottom: 10, 
    borderWidth: 3,
    borderColor: '#fff'
  },

  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    color: '#fff', 
    textAlign: 'center' 
  },

  subtitle: { 
    fontSize: 16, 
    color: '#e0e0e0', 
    textAlign: 'center',
    marginTop: 5
  },

  card: { 
    width: '90%', 
    backgroundColor: 'silver', 
    padding: 20, 
    borderRadius: 12, 
    marginBottom: 15, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 3, 
    elevation: 3, 
    alignItems: 'center'
  },

  heading: {
    fontSize: 20, 
    fontWeight: 'bold', 
    marginBottom: 8, 
    color: '#333' 
  },

  content: { 
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
    lineHeight: 22
  }
});

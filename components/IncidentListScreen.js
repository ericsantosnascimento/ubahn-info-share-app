import React from 'react';
import {FlatList, View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CreateIncidentModal from './CreateIncidentModal';

const IncidentListScreen = ({incident}) => {
  return (
    <View style={styles.container}>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Incidents</Text>
        <FlatList
          data={incident}
          renderItem={({item}) => <Text style={styles.incidentsText}>{item.line}, {item.user}, {item.reportedAt}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>

      <CreateIncidentModal/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  headerContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btn: {
    position: 'absolute',
    right: 25,
    bottom: 25,
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    // padding: 15
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  incidentsText: {
    fontSize: 20,
    color: '#fff'
  },
  bodyContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 40
  },
  title: {
    fontSize: 48,
    color: '#fff'
  },
  subtitle: {
    fontSize: 24,
    color: '#fff'
  }
});

export default IncidentListScreen;

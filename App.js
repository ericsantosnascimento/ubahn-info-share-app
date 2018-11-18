import React from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

import IncidentListScreen from './components/IncidentListScreen';

export default class App extends React.Component {

  state = {
    isLoading: false,
    incident: null,
    error: null
  };

    componentDidMount() {
       navigator.geolocation.getCurrentPosition(
         position => {
           this.fetchIncidents();
         },
         error => {
           this.setState({
             error: 'Error Gettig Ubahn Incidents'
           });
         }
       );
     }

     fetchIncidents() {
       fetch(
         'http://35.226.143.170/ubahn-status-share/incidents'
       )
         .then(res => res.json())
         .then(json => {
           console.log(json);
           this.setState({
            incident: json,
            isLoading: false
          });
         });
    }

    render() {
      const { isLoading, incident } = this.state;
      return (
        <View style={styles.container}>
          {isLoading ? <Text>Fetching Incidents</Text> : <IncidentListScreen incident={incident} />}
        </View>
      );
    }


  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    }
});

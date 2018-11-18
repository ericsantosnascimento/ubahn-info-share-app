import React, {Component} from 'react';
import {Text, TouchableHighlight, TouchableOpacity, View, Alert, StyleSheet} from 'react-native';
import {MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from "react-native-modal";

class CreateIncidentModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          backdropOpacity={0.4}
          style={styles.modalContainer}
          isVisible={this.state.modalVisible}
          onBackdropPress={this.closeModal}
          onRequestClose={() => {Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 40}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <View style={styles.bottomContainer}>
          <TouchableOpacity activeOpacity = { 0.8 } style = { styles.btn } onPress={() => {this.setModalVisible(true);}}>
              <MaterialCommunityIcons size={36} name="plus" color={'#fff'} />
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7b733'
  },
  modalContainer: {
    flex: 1,
    width: 60,
    height: 60,
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
  }
});

export default CreateIncidentModal;

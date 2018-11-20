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
          backdropOpacity={0.3}
          isVisible={this.state.modalVisible}
          onBackdropPress={this.closeModal}
          onRequestClose={() => {Alert.alert('Modal has been closed.');
          }}>

          <View style={styles.modalContainer}>

              <Text>Create an incident</Text>

              <TouchableOpacity style = {styles.btnClose} onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                <MaterialCommunityIcons size={26} name="close" color={'#fff'} />
              </TouchableOpacity>

          </View>
        </Modal>

        <View style={styles.bottomContainer}>
          <TouchableOpacity activeOpacity = { 0.8 } style = {styles.btnPlus} onPress={() => {this.setModalVisible(true);}}>
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
    backgroundColor:'#C0C0C0',
    width: 360,
    height: 500,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnPlus: {
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
  btnClose: {
    position: 'absolute',
    right: 2,
    top: 2,
    borderRadius: 30,
    width: 28,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    // padding: 15
  }
});

export default CreateIncidentModal;

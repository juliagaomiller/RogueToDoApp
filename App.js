import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>- ROGUE TO DO APP -</Text>
        </View>

        <View style={styles.footer}>

          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.textInput}
            placeholder='> note'
            placeholderTextColor='black'
            >
          </TextInput>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    // borderBottomWidth: 10,
    // borderBottomColor: '#ddd',
    alignItems: 'center'
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    padding: 26
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 100,
  },
  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButton: {
    backgroundColor: 'white',
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10
  },
  addButtonText: {
    color: 'black',
    fontSize: 24,
  },
  textInput: {
    alignSelf: 'stretch',
    color: 'black',
    padding: 20,
    paddingTop: 46,
    backgroundColor: 'ghostwhite',
    // borderTopWidth: 2,
    // borderTopColor: '#ededed'
  }

});

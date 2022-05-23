import React from "react";
import {
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import {
  Ionicons,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons";


const NewNote = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.noteHeader}>
        <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
          <Ionicons name="chevron-back-outline" size={28} color="black" />
        </TouchableOpacity>

        <TextInput
          style={styles.noteTitle}
          placeholder="Title"
          placeholderTextColor='#999'
          autoCapitalize="words"
          maxLength={25}
        />

        <View style={styles.buttonGroup}>
        <TouchableOpacity>
          <Ionicons name="book-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Foundation name="paperclip" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </TouchableOpacity>
        </View>
      </View>

      <TextInput
        textAlignVertical="top"
        multiline={true}
        style={styles.noteText}
        placeholder="Enter note here"
        caretHidden={true}
      />

      <View style={styles.toolBar}>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    
    position: 'relative'
  },

  noteHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    borderBottomColor: "#ddd",
  },
  noteTitle: {
    flex: 3,
    fontSize: 18,
    marginHorizontal: 7.5,
  },

  buttonGroup: {
      flexDirection: 'row',
      flex: 2,
      justifyContent: 'space-between'
  },
  noteText: {
    flex: 1,
    padding: 10,
    fontSize: 18,
  
  },

  toolBar: {
      margin: 5,
      padding: 20,
      borderRadius: 25,
      backgroundColor: '#ddd',
      position: 'absolute',
      bottom: 5,
      left: 5,
      right: 5
  }
});

export default NewNote;

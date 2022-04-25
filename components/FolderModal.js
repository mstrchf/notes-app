import { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { ColorPicker, fromHsv } from "react-native-color-picker";

let folderColor = "#eee";

const FolderModal = ({ modalOpen, setModalOpen, addNewFolder }) => {
  const [text, setText] = useState("");
  return (
    <Modal animationType="slide" transparent={false} visible={modalOpen}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textStyle}>Create a new folder</Text>
          <TextInput
            placeholder="Enter folder name"
            onChangeText={setText}
            value={text}
            style={styles.input}
          ></TextInput>
          <View style={{ height: 150 }}>
              <ColorPicker
            hideSliders={true}
            onColorChange={(color) => (folderColor = fromHsv(color))}
            style={{ flex: 1, flexDirection: 'row' }}
          />
          </View>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.buttonClose}
              onPress={() => setModalOpen(false)}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.buttonOpen}
              onPress={() => addNewFolder(text, folderColor)}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
      width: '75%',
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonGroup: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOpen: {
    backgroundColor: "#52b788",
    padding: 10,
    borderRadius: 20,
  },
  buttonClose: {
    backgroundColor: "#e5383b",
    padding: 10,
    borderRadius: 20,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 15,
  },
  input: {
    marginBottom: 25,
    padding: 5,
    fontSize: 20,
    borderWidth: 1,
    borderColor: "#a5a58d",
    borderRadius: 5,
  },
});

export default FolderModal;

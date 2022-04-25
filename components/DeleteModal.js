import React from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";

const DeleteModal = ({ deleteModalOpen, setdeleteModalOpen, deleteFolder }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={deleteModalOpen}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textStyle}>
            Do you want to delete this folder?
          </Text>
          <View style={styles.buttonGroup}>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.buttonClose}
              onPress={() => setdeleteModalOpen(false)}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.75}
              style={styles.buttonOpen}
              onPress={deleteFolder}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                Delete
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
    width: "75%",
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonOpen: {
    alignItems: "center",
    backgroundColor: "#e5383b",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  buttonClose: {
    alignItems: "center",
    backgroundColor: "#52b788",
    padding: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 22,

  },
});

export default DeleteModal;

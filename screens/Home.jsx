import { React, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Entypo } from "@expo/vector-icons";
import Main from "../components/Main";
import Top from "../components/Top";
import DeleteModal from "../components/DeleteModal";
import FolderModal from "../components/FolderModal";
import { StatusBar } from "expo-status-bar";

const folders = [
  { name: "Trip to Dubai", entry: 1, color: "#f9bb05" },
  { name: "Shopping List", entry: 2, color: "#a3bcfc" },
  { name: "Creative Ideas", entry: 3, color: "#fb7e7e" },
  { name: "Stupid Jokes", entry: 4, color: "#52b788" },
];

let indexOfLongPressedFolder = 0;

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setdeleteModalOpen] = useState(false);
  const [state, setstate] = useState(folders);

  const addNewFolder = (folderName, folderColor) => {
    let newFolder = {
      name: folderName,
      entry: state.length + 1,
      color: folderColor,
    };

    let newState = [...state];
    newState.push(newFolder);
    setstate(newState);
    setModalOpen(false);
  };

  const deleteFolder = () => {
    let newState = [...state];
    newState.splice(indexOfLongPressedFolder, 1);
    setstate(newState);
    setdeleteModalOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <DeleteModal
        deleteModalOpen={deleteModalOpen}
        setdeleteModalOpen={setdeleteModalOpen}
        deleteFolder={deleteFolder}
      />
      <FolderModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        addNewFolder={addNewFolder}
      />
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <Top folderCount={state.length} />
          <Main
            folders={state}
            deleteModalOpen={deleteModalOpen}
            setdeleteModalOpen={setdeleteModalOpen}
            indexOfLongPressedFolder={indexOfLongPressedFolder}
          />
        </View>
      </ScrollView>

      <TouchableOpacity
        activeOpacity={0.75}
        style={styles.button}
        onPress={() => setModalOpen(true)}
      >
        <Entypo name="new-message" size={25} color="#eb5e28" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },

  button: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    bottom: 30,
    right: 20,
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#555",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 6.0,
    elevation: 5,
  },
});

export default Home;

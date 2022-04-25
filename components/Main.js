import { View, Text, StyleSheet } from "react-native";
import { Entypo, Feather } from "@expo/vector-icons";
import Folders from "./Folders";

function Main({ folders, deleteModalOpen, setdeleteModalOpen, indexOfLongPressedFolder }) {
  return (
    <View style={styles.main}>
      <View style={styles.breadcrumb}>
        <Feather name="folder" size={24} color="black" />
        <Entypo
          style={{ paddingHorizontal: 8 }}
          name="chevron-thin-right"
          size={18}
          color="black"
        />
        <Text style={{ fontSize: 18 }}>Folders</Text>
      </View>
      <Folders
        folders={folders}
        deleteModalOpen={deleteModalOpen}
        setdeleteModalOpen={setdeleteModalOpen}
        indexOfLongPressedFolder={indexOfLongPressedFolder}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginTop: 40,
    marginBottom: 100,
    marginHorizontal: "5%",
  },
  breadcrumb: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Main;

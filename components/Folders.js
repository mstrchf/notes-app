import { View, StyleSheet } from "react-native";

import Folder from "./Folder";
const Folders = ({ folders, deleteModalOpen, setdeleteModalOpen,indexOfLongPressedFolder }) => {
  return (
    <View style={styles.folders}>
      {folders.map(function (folder, index) {
        return (
          <Folder
            key={++index}
            folder={folder}
            index={index}
            deleteModalOpen={deleteModalOpen}
            setdeleteModalOpen={setdeleteModalOpen}
            indexOfLongPressedFolder={indexOfLongPressedFolder}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  folders: {
    flexDirection: "row",
    marginTop: 20,
    flexWrap: "wrap",
    marginBottom: 100,
  },
});

export default Folders;

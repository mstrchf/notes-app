import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
const { width } = Dimensions.get("screen");
const folderWidth = width / 4;

const Folder = ({
  folder,
  index,
  setdeleteModalOpen,
  indexOfLongPressedFolder,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onLongPress={() => {
        setdeleteModalOpen(true);
        indexOfLongPressedFolder = index;
      }}
      style={[
        styles.folderIcon,
        { marginLeft: index % 3 !== 0 ? width - folderWidth * 3.7 : 0 },
      ]}
    >
      <Text style={{ color: "gray", fontSize: 10 }}>{folder.entry}</Text>
      <Text style={{ fontSize: 14, fontWeight: "bold" }}>{folder.name}</Text>
      <View
        style={[
          styles.folderColor,
          { backgroundColor: folder.color, shadowColor: folder.color },
        ]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  folderIcon: {
    position: "relative",
    width: folderWidth,
    height: 65,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4.0,
    elevation: 5,
    justifyContent: "space-between",

    paddingTop: 4,
    paddingBottom: 5.5,
    paddingHorizontal: 6,
    marginBottom: 20,
  },

  folderColor: {
    position: "absolute",
    right: 0,
    top: 0,
    width: "50%",
    height: 10,
    borderBottomLeftRadius: 15,
    borderTopRightRadius: 7.5,
    shadowOffset: {
      width: -1,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.0,
    elevation: 5,
  },
});

export default Folder;

import { StyleSheet, Text, View, Dimensions, } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
const { height } = Dimensions.get("screen");

function Top({folderCount}) {
  return (
    <View style={styles.top}>
      <View style={styles.heading}>
        <Text style={styles.headingText1}>Folders</Text>
        <Text style={styles.headingText2}>{folderCount} Folders, 24 Notes</Text>
      </View>
      <View style={styles.icons}>
        <Ionicons name="ios-menu-outline" size={30} color="black" />
        <View style={{ flexDirection: "row" }}>
          <MaterialIcons
            style={{ paddingRight: 15 }}
            name="addchart"
            size={24}
            color="black"
          />
          <AntDesign
            style={{ paddingRight: 15 }}
            name="search1"
            size={24}
            color="black"
          />
          <MaterialCommunityIcons
            name="dots-vertical"
            size={24}
            color="black"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  top: {
    justifyContent: "space-between",
    height: height / 3,
    marginHorizontal: '5%',
    position: 'sticky'
  },
  heading: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  headingText1: {
    fontSize: 36,
  },
  headingText2: {
    fontSize: 18,
    paddingTop: 5,
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default Top;

import "react-native-gesture-handler";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

// imported screens
import NewNote from "./screens/NewNote";
import Home from "./screens/Home";
import FoldersManager from "./screens/FoldersManager";
import Favorite from "./screens/Favorite";
import Trash from "./screens/Trash";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const { width } = Dimensions.get("screen");

function CustomDrawerContent({ props, navigation }) {
  const [activeDrawerItem, setActiveDrawerItem] = useState("notes");
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View style={styles.drawerItem}>
        <TouchableOpacity>
          <Ionicons name="ios-menu-outline" size={26} color="#777" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="settings-outline" size={26} color="#777" />
        </TouchableOpacity>
      </View>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Home");
              setActiveDrawerItem("notes");
            }}
            style={[
              styles.drawerItem,
              {
                backgroundColor:
                  activeDrawerItem === "notes" ? "#CBDEF6" : "#fff",
              },
            ]}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name={
                  activeDrawerItem === "notes" ? "notebook" : "notebook-outline"
                }
                size={27}
                color="#555"
              />
              <Text style={styles.drawerItemText}>All Notes</Text>
            </View>
            <Text>100</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Favorite");
              setActiveDrawerItem("favorite");
            }}
            style={[
              styles.drawerItem,
              {
                backgroundColor:
                  activeDrawerItem === "favorite" ? "#CBDEF6" : "#fff",
              },
            ]}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name={activeDrawerItem === "favorite" ? "star" : "star-outline"}
                size={27}
                color="#555"
              />
              <Text style={styles.drawerItemText}>Favorite</Text>
            </View>
            <Text>100</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Trash");
              setActiveDrawerItem("trash");
            }}
            style={[
              styles.drawerItem,
              {
                backgroundColor:
                  activeDrawerItem === "trash" ? "#CBDEF6" : "#fff",
              },
            ]}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name={
                  activeDrawerItem === "trash"
                    ? "trash-can"
                    : "trash-can-outline"
                }
                size={27}
                color="#555"
              />
              <Text style={styles.drawerItemText}>Trash</Text>
            </View>
            <Text>100</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setActiveDrawerItem("folders");
              navigation.navigate("FoldersManager");
            }}
            style={[
              styles.drawerItem,
              {
                backgroundColor:
                  activeDrawerItem === "folders" ? "#CBDEF6" : "#fff",
              },
            ]}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name={
                  activeDrawerItem === "folders" ? "folder" : "folder-outline"
                }
                size={27}
                color="#555"
              />
              <Text style={styles.drawerItemText}>Folders</Text>
            </View>
            <Text>100</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        label="Help"
        onPress={() => alert("Link to help")}
        icon={({ color, size, focused }) => (
          <MaterialCommunityIcons
            size={size}
            color={color}
            name={focused ? "help-circle" : "help-circle-outline"}
          />
        )}
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="NewNote"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: false,
          drawerType: "front",
          drawerStyle: {
            paddingVertical: 10,
            width: width / 1.25,
            marginVertical: 27,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          },
        }}
      >
        <Drawer.Screen name="NewNote" component={NewNote} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="FoldersManager" component={FoldersManager} />
        <Drawer.Screen name="Favorite" component={Favorite} />
        <Drawer.Screen name="Trash" component={Trash} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 15,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },

  drawerItemText: { fontSize: 18, marginLeft: 15, color: "#555" },
});

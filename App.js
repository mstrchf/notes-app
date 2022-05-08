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
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import Home from "./screens/Home";
import FoldersManager from "./screens/FoldersManager";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const { width } = Dimensions.get("screen");

function CustomDrawerContent({ props, navigation }) {
  const [activeDrawerItem, setActiveDrawerItem] = useState("notes");
  return (
    <View style={{ flex: 1, justifyContent: "space-between" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 10,
          margin: 5,
        }}
      >
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
              navigation.navigate("FoldersManager");
              setActiveDrawerItem("notes");
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              margin: 5,
              backgroundColor:
                activeDrawerItem === "notes" ? "#CBDEF6" : "#fff",
              borderRadius: 10,
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name="notebook-outline"
                size={30}
                color="#000"
              />
              <Text style={{ fontSize: 20, marginLeft: 15 }}>All Notes</Text>
            </View>
            <Text>100</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FoldersManager");
              setActiveDrawerItem("favorite");
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              margin: 5,
              backgroundColor:
                activeDrawerItem === "favorite" ? "#CBDEF6" : "#fff",
              borderRadius: 10,
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name="star-outline"
                size={30}
                color="#000"
              />
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Favorite</Text>
            </View>
            <Text>100</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FoldersManager");
              setActiveDrawerItem("trash");
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              margin: 5,
              backgroundColor:
                activeDrawerItem === "trash" ? "#CBDEF6" : "#fff",
              borderRadius: 10,
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={30}
                color="#000"
              />
              <Text style={{ fontSize: 20, marginLeft: 15 }}>Trash</Text>
            </View>
            <Text>100</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("FoldersManager");
              setActiveDrawerItem("folders");
            }}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              margin: 5,
              backgroundColor:
                activeDrawerItem === "folders" ? "#CBDEF6" : "#fff",
              borderRadius: 10,
            }}
          >
            <View
              style={{ flex: 1, flexDirection: "row", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name="folder-outline"
                size={30}
                color="#000"
              />
              <Text style={{ fontSize: 20, marginLeft: 15 }}>folders</Text>
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
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          drawerType: "front",
          drawerStyle: {
            width: width / 1.15,
            marginVertical: 40,
            borderTopRightRadius: 15,
            borderBottomRightRadius: 15,
          },
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? "notebook" : "notebook-outline"}
                size={size}
                color={color}
              />
            ),
            drawerLabel: () => (
              <View>
                <Text>All Notes</Text>
                <Text>1000</Text>
              </View>
            ),

            drawerItemStyle: { flex: 1, justifyContent: "center" },
            drawerContentStyle: { flex: 1, justifyContent: "center" },
          }}
        />
        <Drawer.Screen
          name="FoldersManager"
          component={FoldersManager}
          options={{
            title: "Folders",
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? "folder" : "folder-outline"}
                size={size}
                color={color}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

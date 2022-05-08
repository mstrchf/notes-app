import "react-native-gesture-handler";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./screens/Home";
import FoldersManager from "./screens/FoldersManager";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
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
    </DrawerContentScrollView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{ headerShown: false, drawerType: 'front' }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "All notes",
            drawerIcon: ({ focused, color, size }) => (
              <MaterialCommunityIcons
                name={focused ? "notebook" : "notebook-outline"}
                size={size}
                color={color}
              />
            ),
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

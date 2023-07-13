import { View } from "react-native";
import { ChatScreen } from "@/src/chat-screen/screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ContactList } from "../contact-list/screen";

const AppNavStack = createNativeStackNavigator();
export function AppNav() {
  return (
    <AppNavStack.Navigator>
      <AppNavStack.Screen
        name={"ContactList"}
        component={ContactList}
        options={{ title: "My Chat Contact list" }}
      />
      <AppNavStack.Screen
        name={"ChatScreen"}
        component={ChatScreen}
        options={({ route }) => ({ title: route.params.userName })}
      />
    </AppNavStack.Navigator>
  );
}

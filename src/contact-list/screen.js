import { FlatList, View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useNavigation } from "@react-navigation/native";

export function ContactList() {
  const tailwind = useTailwind();
  const navigation = useNavigation();
  const contactPeopleList = [
    {
      id: "1",
      userName: "Pravin",
    },
    {
      id: "2",
      userName: "Razman",
    },
  ];

  function onPressUser(userName) {
    navigation.navigate("ChatScreen", { userName });
  }
  return (
    <View style={tailwind("flex-1")}>
      <FlatList
        data={contactPeopleList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => onPressUser(item.userName)}>
            <View style={tailwind("flex-row items-center mt-3 mx-4")}>
              <View style={tailwind("rounded-full bg-gray-500 h-8 w-8 mr-2")} />
              <Text style={tailwind("font-bold text-base")}>
                {item.userName}
              </Text>
            </View>
            <View style={tailwind("h-px bg-gray-200 mt-3 mx-4")} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

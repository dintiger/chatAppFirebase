import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { SafeAreaView } from "react-native";
import { useTailwind } from "tailwind-rn";
import { collection, query, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useRoute } from "@react-navigation/native";

export function ChatScreen() {
  const tailwind = useTailwind();
  const route = useRoute();
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
    const chatMessagesList = query(collection(db, "chatMessages"));
    const unsubscribe = onSnapshot(chatMessagesList, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        messages.push({
          ...doc.data(),
          _id: doc.id,
          createdAt: new Date(doc.data().createdAt.toMillis()),
        });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const onSend = React.useCallback(async (messages = []) => {
    await addDoc(collection(db, "chatMessages"), {
      ...messages[0],
      user: {
        _id: 2,
        userName: route.params.userName,
      },
    });
  }, []);

  return (
    <SafeAreaView style={tailwind("flex-1")}>
      <GiftedChat
        messages={messages}
        alwaysShowSend={true}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
}

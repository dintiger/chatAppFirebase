import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { AppNav } from "./src/AppNav/screen";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <AppNav />
      </NavigationContainer>
    </TailwindProvider>
  );
}

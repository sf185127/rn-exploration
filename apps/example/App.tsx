import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./navigators/Main";

export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

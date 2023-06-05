import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ElementsExampleScreen from "../../screens/ElementsExample";
import HomeScreen from "../../screens/Home";

const screens = {
  HomeScreen: {
    Component: HomeScreen,
    params: {} as {} | undefined,
    options: {
      title: "Home",
    },
  },
  ElementsExampleScreen: {
    Component: ElementsExampleScreen,
    params: {} as {} | undefined,
    options: {
      title: "Elements Example",
    },
  },
} as const;

type ParamList = {
  [k in keyof typeof screens]: (typeof screens)[k]["params"];
};

const MainStackNavigator = createNativeStackNavigator<ParamList>();

export default function MainStack() {
  return (
    <MainStackNavigator.Navigator>
      {Object.entries(screens).map(([name, { Component, options, params }]) => (
        <MainStackNavigator.Screen
          name={name as keyof typeof screens}
          key={name}
          component={Component}
          options={options}
          initialParams={params}
        />
      ))}
    </MainStackNavigator.Navigator>
  );
}

export const useMainStackNavigation = useNavigation<NavigationProp<ParamList>>;
export const useMainStackRoute = useRoute<RouteProp<ParamList>>;

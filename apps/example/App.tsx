import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import {
  ThemeProvider as PaperThemeProvider,
  Button as PaperButton,
} from "paper-ds-lib";
import {
  ThemeProvider as RneThemeProvider,
  createTheme as createRneTheme,
  Button as RneButton,
} from "elements-ds-lib";
import {
  ThemeProvider as NbThemeProvider,
  createTheme as createNbTheme,
  Button as NbButton,
} from "nativebase-ds-lib";
// import {
//   ThemeProvider as TamaguiThemeProvider,
//   createTheme as createTamaguiTheme,
//   Button as TamaguiButton,
// } from "tamagui-ds-lib";

const rneTheme = createRneTheme({
  components: {
    Button: {
      color: "secondary",
    },
  },
});

const nbTheme = createNbTheme({
  components: {
    NbButton: {
      bg: "blue",
    },
  },
});

// const tamaguiTheme = createTamaguiTheme({
//   fonts: {},
//   tokens: {
//     color: {},
//     space: {},
//     size: {},
//     radius: {},
//     zIndex: {},
//   },
//   themes: {},
// });

export default function App() {
  return (
    <ScrollView
      contentContainerStyle={{ paddingVertical: 80, paddingHorizontal: 16 }}
    >
      <StatusBar style="auto" />

      <View style={{ marginVertical: 10 }}>
        <Text>react-native-paper</Text>
        <PaperThemeProvider>
          <PaperButton>Test</PaperButton>
        </PaperThemeProvider>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text>react-native-elements</Text>
        <RneThemeProvider theme={rneTheme}>
          <RneButton>Test</RneButton>
        </RneThemeProvider>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text>native-base</Text>
        <NbThemeProvider theme={nbTheme}>
          <NbButton>Test</NbButton>
        </NbThemeProvider>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text>tamagui</Text>
        <Text>Needs more research</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text>gluestack-ui</Text>
        <Text>Needs more research</Text>
      </View>
    </ScrollView>
  );
}

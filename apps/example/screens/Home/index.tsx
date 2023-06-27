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
import { useMainStackNavigation } from "../../navigators/Main";
// import {
//   ThemeProvider as TamaguiThemeProvider,
//   createTheme as createTamaguiTheme,
//   Button as TamaguiButton,
// } from "tamagui-ds-lib";
// import { Button as RnuilibButton } from "rnuilib-ds-lib";
import { Button as GluestackButton } from "gluestack-ds-lib";
import { Button } from "tamagui-ds-lib";

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

export default function HomeScreen() {
  const mainStackNav = useMainStackNavigation();

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <StatusBar style="auto" />

      <View style={{ marginVertical: 10 }}>
        <Text>react-native-paper</Text>
        <PaperThemeProvider>
          <PaperButton
            onPressOut={() => {
              console.log("END");
            }}
          >
            Test
          </PaperButton>
        </PaperThemeProvider>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text>react-native-elements</Text>
        <RneThemeProvider theme={rneTheme}>
          <RneButton
            onPress={() => {
              mainStackNav.navigate("ElementsExampleScreen");
            }}
          >
            Test
          </RneButton>
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
        <Button>Test</Button>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text>gluestack-ui</Text>
      </View>

      <View style={{ marginVertical: 10 }}>
        <Text>rnuilib</Text>
        <Text>Not able to build</Text>
        <Text>
          [commonjs--resolver] Unexpected token (321:17) in
          /Users/SF185127/Projects/rn-exploration/packages/rnuilib/node_modules/react-native-ui-lib/src/components/button/index.js
        </Text>
      </View>
    </ScrollView>
  );
}

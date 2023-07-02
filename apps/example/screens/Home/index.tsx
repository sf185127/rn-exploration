import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import { useMainStackNavigation } from "../../navigators/Main";
import { Box, Button, createTheme, NCRThemeProvider } from "tamagui-ds-lib";

const tamatheme = createTheme();

export default function HomeScreen() {
  const mainStackNav = useMainStackNavigation();

  return (
    <NCRThemeProvider config={tamatheme}>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <StatusBar style="auto" />

        <Box style={{ marginVertical: 10 }} space={12}>
          <Text>tamagui</Text>
          <Button>
            <Button.Text>Test</Button.Text>
          </Button>
          <Button color={"destructive"}>
            <Button.Text>Test</Button.Text>
          </Button>
          <Button variant="outlined">
            <Button.Text>Test</Button.Text>
          </Button>
          <Button variant="outlined" color="destructive" space={12}>
            <Button.Text>Test</Button.Text>
            <Button.Text>Test</Button.Text>
          </Button>
        </Box>
      </ScrollView>
    </NCRThemeProvider>
  );
}

import { ScrollView, View } from "react-native";
import { ThemeProvider, Button } from "elements-ds-lib";

export default function ElementsExampleScreen() {
  return (
    <ThemeProvider>
      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View>
          <Button>Button</Button>
        </View>
      </ScrollView>
    </ThemeProvider>
  );
}

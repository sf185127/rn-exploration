import { ScrollView, View } from "react-native";
import { ThemeProvider, Button } from "paper-ds-lib";

export default function PaperExampleScreen() {
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

import { Provider as PaperProvider } from "react-native-paper";
import SplashScreen, { navigationRef } from "./src/screens/splash.screen";
import { theme } from "./src/theme/apptheme";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/home.screen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" options={{ headerShown: false }} component={SplashScreen} />
          <Stack.Screen name="Home" options={{ headerLeft: false }} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

import { Headline } from "react-native-paper";
import Container from "../components/container";
import { theme } from "../theme/apptheme";
import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();
export default SplashScreen = () => {
  setTimeout(() => {
    navigationRef.navigate("Home");
  }, 3000);
  return (
    <Container style={{ backgroundColor: theme.colors.primary, alignItems: "center", justifyContent: "center" }}>
      <Headline style={{ color: theme.colors.textLight }}>Star Selector</Headline>
    </Container>
  );
};

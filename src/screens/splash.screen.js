import { Headline } from "react-native-paper";
import { ContainerCenter }  from "../components/container";
import { theme } from "../theme/apptheme";
import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();
export default SplashScreen = () => {
  setTimeout(() => {
    navigationRef.navigate("Home");
  }, 3000);
  return (
    <ContainerCenter style={{ backgroundColor: theme.colors.primary, flex: 1 }}>
      <Headline style={{ color: theme.colors.textLight }}>Star Selector</Headline>
    </ContainerCenter>
  );
};

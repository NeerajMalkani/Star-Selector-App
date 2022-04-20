import { Image, ScrollView } from "react-native";
import { Avatar, Card, Headline, Text } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerHorizontal } from "../../components/container";
import { theme } from "../../theme/apptheme";

export default DashboardScreen = () => {
  const objUserData = {
    avatar: "https://i.pinimg.com/originals/c4/c4/7d/c4c47d20db79996fe7b8f92bf4f92d9d.jpg",
    stats: {
      Rank: "#2",
      Points: "275",
      Contests: "21",
    },
  };
  const CreateCard = () => {
    return Object.keys(objUserData.stats).map((k) => {
      return (
        <Container style={{ flex: 1, padding: 4 }}>
          <Card style={{ backgroundColor: theme.colors.accent }}>
            <Card.Content>
              <Text style={{ color: theme.colors.textLightSecondary }}>{k}</Text>
              <Headline style={{ color: theme.colors.textLight }}>{objUserData.stats[k]}</Headline>
            </Card.Content>
          </Card>
        </Container>
      );
    });
  };
  return (
    <ScrollView>
      <Container style={{ backgroundColor: theme.colors.primary, padding: 16 }}>
        <SafeAreaView>
          <ContainerHorizontal style={{ height: 56 }}>
            <Image source={require("../../../assets/logo.png")} style={{ width: 32, height: 32 }} />
            <Headline style={{ color: theme.colors.textLight, marginLeft: 8, flexGrow: 1, marginRight: 64 }}>Star Selector</Headline>
            <Avatar.Image size={32} source={{ uri: objUserData.avatar }} style={{ justifyContent: "flex-end" }}></Avatar.Image>
          </ContainerHorizontal>
          <ContainerHorizontal style={{ height: 104 }}>{CreateCard()}</ContainerHorizontal>
        </SafeAreaView>
      </Container>
    </ScrollView>
  );
};

import React, { useState, useEffect } from "react";
import { Image, ScrollView, RefreshControl } from "react-native";
import { Avatar, Card, Headline, Text } from "react-native-paper";
import { TabBar, TabView, SceneMap } from "react-native-tab-view";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Container, ContainerHorizontal, ContainerVertical } from "../../components/container";
import { theme } from "../../theme/apptheme";
import MatchCard from "../../components/matchcard";
import { APIKEY } from "../../api/credentials";
import useAxios from "../../api/provider";

const windowWidth = Dimensions.get("window").width;

export default DashboardScreen = () => {
  const [index, setIndex] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const objUserData = {
    avatar: "https://i.pinimg.com/originals/c4/c4/7d/c4c47d20db79996fe7b8f92bf4f92d9d.jpg",
    stats: {
      Rank: "#2",
      Points: "275",
      Contests: "21",
    },
  };
  const { response, loading, error, fetchData } = useAxios({
    method: "GET",
    url: "/getfixtures",
    headers: JSON.stringify({
      headers: {
        XApiKey: APIKEY,
      },
    }),
  });
  useEffect(() => {
    setRefreshing(false);
  }, [refreshing]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchData();
  }, []);
  const renderTabBar = (props) => <TabBar {...props} indicatorStyle={{ backgroundColor: theme.colors.primary }} style={{ backgroundColor: theme.colors.textLight }} inactiveColor={theme.colors.text} activeColor={theme.colors.primary} scrollEnabled={true} tabStyle={{ width: windowWidth / 3 }} labelStyle={{ fontSize: 14, fontWeight: "bold" }} />;
  const matchTab = () => {
    return (
      <ScrollView style={{ flex: 1 }} refreshControl={<RefreshControl colors={[theme.colors.primary]} refreshing={refreshing} onRefresh={onRefresh} />}>
        <MatchCard fixtures={response !== null ? response.data : []} />
      </ScrollView>
    );
  };
  const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
      case "live":
      case "upcoming":
      case "results":
        return (
          <ScrollView style={{ flex: 1 }} refreshControl={<RefreshControl colors={[theme.colors.primary]} refreshing={refreshing} onRefresh={onRefresh} />}>
            <MatchCard fixtures={response !== null ? response.data : []} />
          </ScrollView>
        );
    }
  };
  const [routes] = useState([
    { key: "live", title: "Live" },
    { key: "upcoming", title: "Upcoming" },
    { key: "results", title: "Results" },
  ]);
  const CreateCard = () => {
    return Object.keys(objUserData.stats).map((k) => {
      return (
        <Container key={k} style={{ flex: 1, padding: 4 }}>
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
    <ContainerVertical style={{ flex: 1 }}>
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
      <Container style={{ flex: 1 }}>
        <TabView renderTabBar={renderTabBar} navigationState={{ index, routes }} renderScene={renderScene} onIndexChange={setIndex} />
      </Container>
    </ContainerVertical>
  );
};

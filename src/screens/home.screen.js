import { BottomNavigation } from "react-native-paper";
import React from "react";
import DashboardScreen from "./home/dashboard.screen";
import ContestsScreen from "./home/contests.screen";
import NewsScreen from "./home/news.screen";
import SettingsScreen from "./home/settings.screen";

export default HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "dashboard", title: "Dashboard", icon: "home" },
    { key: "contests", title: "Contest", icon: "handshake" },
    { key: "news", title: "News", icon: "newspaper" },
    { key: "settings", title: "Settings", icon: "account-settings" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    dashboard: DashboardScreen,
    contests: ContestsScreen,
    news: NewsScreen,
    settings: SettingsScreen,
  });
  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />;
};

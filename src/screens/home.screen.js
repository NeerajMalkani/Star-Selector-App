import { BottomNavigation, Text } from "react-native-paper";
import React from "react";
export default HomeScreen = () => {
  const [index, setIndex] = React.useState(0);
  const HomeRoute = () => <Text>Home</Text>;
  const ContestsRoute = () => <Text>Contests</Text>;
  const NewsRoute = () => <Text>News</Text>;
  const SettingsRoute = () => <Text>Settings</Text>;
  const [routes] = React.useState([
    { key: "home", title: "Home", icon: "home" },
    { key: "contests", title: "Contest", icon: "home" },
    { key: "news", title: "News", icon: "home" },
    { key: "settings", title: "Settings", icon: "home" },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    contests: ContestsRoute,
    news: NewsRoute,
    settings: SettingsRoute,
  });
  return <BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />;
};

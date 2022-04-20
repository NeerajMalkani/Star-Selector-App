import { View } from "react-native";

export default Container = (props) => {
  return <View style={{ ...props.style, display: "flex", flex: 1 }}>{props.children}</View>;
};

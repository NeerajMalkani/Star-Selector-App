import { Caption, Card, Headline, Paragraph, Subheading, Surface, Title, Text, Divider } from "react-native-paper";
import { ScrollView, Image } from "react-native";
import { Container } from "./container";
import { theme } from "../theme/apptheme";

const MatchCard = (props) => {
  return (
    <ScrollView>
      <Container style={{margin: 16, marginTop: 0}}>
        {props.fixtures && props.fixtures.map((k, i) => {
          return (
            <Surface key={i} style={{ padding: 16, marginTop: 16, elevation: 4, borderRadius: 4 }}>
              <Container style={{ flexDirection: "column" }}>
                <Container style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={{ uri: k.league_image }} resizeMode="contain" style={{ width: 48, height: 48 }} />
                  <Container style={{ flexDirection: "column" }}>
                    <Subheading style={{ color: theme.colors.text, fontWeight: "bold", paddingLeft: 16 }}>{k.league_name}</Subheading>
                    <Paragraph style={{ color: theme.colors.textSecondary, paddingLeft: 16 }}>{k.local_team_code + " vs " + k.visitor_team_code + " . " + k.match_name}</Paragraph>
                  </Container>
                </Container>
                <Divider style={{marginTop: 8, marginBottom: 8, backgroundColor: theme.colors.textSecondary}} />
                <Container style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={{ uri: k.local_team_flag }} resizeMode="contain" style={{ width: 48, height: 48 }} />
                  <Text style={{ color: theme.colors.text, paddingLeft: 16 }}>{k.local_team_name}</Text>
                </Container>
                <Container style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image source={{ uri: k.visitor_team_flag }} resizeMode="contain" style={{ width: 48, height: 48 }} />
                  <Text style={{ color: theme.colors.text, paddingLeft: 16 }}>{k.visitor_team_name}</Text>
                </Container>
              </Container>
            </Surface>
          );
        })}
      </Container>
    </ScrollView>
  );
};

export default MatchCard;

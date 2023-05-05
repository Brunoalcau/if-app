import React, { useCallback } from "react";
import TopBar from "../../components/TopBar";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  ScrollView,
  Avatar,
  Stack,
  Icon,
  SectionList,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  name: string;
  email: string;
}

// TODO: Criar uma estrutura melhor.
const mapsScenes: any = {
  "Pedido de auxilio": "AskForHelp",
  "Cartão de Vacinação": "VaccinationCard",
  "Agendamento de atendimento": "AppointmentScheduling",
  "Identificação do refeitório": "",
  "Cardápio semanal": "",
  "Alimentação do Campus": "",
};
const items = [
  {
    title: "Configuração conta",
    data: ["Pedido de auxilio"],
  },
  {
    data: ["Cartão de Vacinação", "Agendamento de atendimento"],
    title: "Saúde",
  },
  {
    title: "Refeitório",
    data: [
      "Identificação do refeitório",
      "Cardápio semanal",
      "Alimentação do Campus",
    ],
  },
];
const profile = {
  registration: "1893002",
  birth: "26/11/1988",
  class: "integrafor 3 serie | ensino medio",
  responsible: "Clairton",
};

const Profile: React.FC<Props> = ({
  name = "Poetri Lazuardi",
  email = "poetri.lazuardi@mail.com",
}) => {
  const navigation = useNavigation();
  const onPressRoute = (route: string) => {
    if (mapsScenes[route]) {
      navigation.navigate(mapsScenes[route]);
    }
  };
  return (
    <View flex="1" backgroundColor="green.400">
      <TopBar title="Conta" />
      <View flex="1" alignItems="center" paddingTop="8" paddingBottom="8">
        <Avatar
          size="xl"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        />
        <View alignItems="center">
          <Text fontSize="2xl" fontWeight="bold" color="white">
            {name}
          </Text>
          <Text fontSize="lg" color="white">
            {email}
          </Text>
        </View>
      </View>
      <View flex="2" borderTopRadius="3xl" backgroundColor="gray.100">
        <Stack paddingTop="2">
          <SectionList
            sections={items}
            renderSectionHeader={({ section }) => (
              <View
                borderTopRadius="3xl"
                paddingLeft="8"
                paddingRight="8"
                paddingBottom="2"
                backgroundColor="gray.100"
              >
                <Text fontSize="sm" color="gray.400">
                  {section.title}
                </Text>
              </View>
            )}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onPressRoute(item)}>
                <View
                  paddingLeft="8"
                  paddingRight="8"
                  paddingTop="2"
                  paddingBottom="2"
                  fontWeight="regular"
                  flexDirection="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <View>
                    <Text fontSize="md" fontWeight="regular">
                      {item}
                    </Text>
                  </View>
                  <Icon
                    color="blueGray.500"
                    size="sm"
                    marginLeft={3}
                    as={FontAwesome5}
                    name="arrow-right"
                  />
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(i, index) => i + index}
            contentContainerStyle={{
              flexGrow: 1,
              paddingTop: 15,
            }}
          />
        </Stack>
      </View>
    </View>
  );
};

export default Profile;

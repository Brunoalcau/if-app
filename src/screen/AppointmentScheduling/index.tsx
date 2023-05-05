import { Text, View, Icon, IconButton } from "native-base";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TopBar from "../../components/TopBar";

const AppointmentScheduling = () => {
  const navigation = useNavigation();
  return (
    <View backgroundColor="green.400">
      <TopBar
        title="Agendamento"
        leftComponent={
          <IconButton
            padding="0"
            onPress={() => navigation.goBack()}
            icon={
              <Icon
                color="white"
                as={FontAwesome5}
                name="arrow-left"
                size="sm"
              />
            }
          />
        }
      />
      <Text>AppointmentScheduling</Text>
    </View>
  );
};

export default AppointmentScheduling;

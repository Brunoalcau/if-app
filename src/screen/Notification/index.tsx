import { Text, View, Icon, IconButton, Stack, VStack } from "native-base";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TopBar from "../../components/TopBar";

const Notification = () => {
  const navigation = useNavigation();
  return (
    <View flex="1" backgroundColor="green.400">
      <Stack flex="1">
        <VStack>
          <TopBar
            title="Notification"
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
        </VStack>
        <VStack flex="2" backgroundColor="gray.100" borderRadius="2xl"></VStack>
      </Stack>
    </View>
  );
};

export default Notification;

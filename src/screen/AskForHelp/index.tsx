import {
  Text,
  View,
  Icon,
  IconButton,
  Stack,
  VStack,
  ScrollView,
  Card,
  Box,
} from "native-base";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TopBar from "../../components/TopBar";
import Button from "../../components/Button";

const AskForHelp = () => {
  const navigation = useNavigation();
  const [order, _] = useState([
    {
      id: "23232323",
      title: "Um tablet",
    },
  ]);
  const onPressRoute = () => {};
  return (
    <View flex="1" backgroundColor="green.400">
      <Stack flex="1">
        <VStack>
          <TopBar
            title="Pedido de auxilio"
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
        <VStack flex="3" borderTopRadius="2xl" backgroundColor="gray.100">
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            {order.map(item => (
              <TouchableOpacity onPress={() => onPressRoute()} key={item.id}>
                <Card marginTop="4" backgroundColor="white">
                  <View
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-evenly"
                  >
                    <Box flex="3">
                      <View>
                        <Text fontSize="sm" color="gray.500">
                          Pedido:
                        </Text>
                        <Text fontSize="md">{item.id}</Text>
                      </View>
                      <View>
                        <Text fontSize="sm" color="gray.500">
                          Tipo do auxilio:
                        </Text>
                        <Text fontSize="sm"> {item.title}</Text>
                      </View>
                    </Box>
                    <Box
                      flex="1"
                      borderRadius="md"
                      backgroundColor="red.200"
                    ></Box>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </VStack>
        <VStack flex="0.4" backgroundColor="white" padding="4">
          <Button
            background="green.400"
            variant="solid"
            onPress={() => {
              navigation.navigate("NewAskForHelp");
            }}
          >
            Pedir
          </Button>
        </VStack>
      </Stack>
    </View>
  );
};

export default AskForHelp;

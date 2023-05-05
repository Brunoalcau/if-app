import {
  Text,
  View,
  Icon,
  IconButton,
  ScrollView,
  Stack,
  VStack,
  Box,
  Card,
} from "native-base";
import { TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import TopBar from "../../components/TopBar";

const VaccinationCard = () => {
  const navigation = useNavigation();
  const [doses, _] = useState([
    {
      data: "24/01/2021",
      institution: "Janssen",
      unit: "SMS CF FORTALEZA",
      status: "vacinado",
      lote: "covid19",
    },
  ]);
  const onPressRoute = () => {};
  return (
    <View flex="1" backgroundColor="green.400">
      <Stack flex="1">
        <VStack>
          <TopBar
            title="Cartões de vacinação"
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
        <VStack flex="2" backgroundColor="gray.100" borderRadius="2xl">
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            {doses.map(item => (
              <TouchableOpacity onPress={() => onPressRoute()}>
                <Card marginTop="4" backgroundColor="white">
                  <View
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-evenly"
                  >
                    <Box flex="1">
                      <View>
                        <Text fontSize="sm" color="gray.500">
                          Instituição:
                        </Text>
                        <Text fontSize="md">{item.institution}</Text>
                      </View>
                      <View>
                        <Text fontSize="sm" color="gray.500">
                          Data da aplicação:
                        </Text>
                        <Text fontSize="sm"> {item.data}</Text>
                      </View>
                    </Box>
                    <Box flex="1" borderRadius="md">
                      <View>
                        <Text fontSize="sm" color="gray.500">
                          Undade de saúde:
                        </Text>
                        <Text fontSize="sm"> {item.unit}</Text>
                      </View>
                      <View>
                        <Text fontSize="sm" color="gray.500">
                          Lote:
                        </Text>
                        <Text fontSize="sm"> {item.lote}</Text>
                      </View>
                    </Box>
                  </View>
                </Card>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </VStack>
      </Stack>
    </View>
  );
};

export default VaccinationCard;

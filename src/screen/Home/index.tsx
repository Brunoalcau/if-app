import React from "react";
import {
  Box,
  Stack,
  Text,
  Heading,
  VStack,
  Image,
  IconButton,
  Card,
  Progress,
  Badge,
} from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import CardIcon from "../../components/CardIcon";
import { Icon } from "native-base";
import SvgQRCode from "react-native-qrcode-svg";

import TopBar from "../../components/TopBar";
import { View, Avatar, ScrollView } from "native-base";

type Props = {};

const Home = ({
  navigation,
  user = { name: "Poetri lazuardi", id: "223344556" },
  course = { name: "Tecnologia da Informação" },
}) => {
  const [mattersTheDay, _] = React.useState([
    {
      title: "Matemática",
      teacher: "João Queiroz",
    },
    {
      title: "Língua Portuguesa",
      teacher: "Julia Alves",
    },
    {
      title: "História",
      teacher: "Juio gadelho",
    },
  ]);
  return (
    <Stack flex="1" backgroundColor="green.400">
      <VStack flex="1.3" position="relative">
        <TopBar
          isProfile
          leftComponent={
            <Avatar
              size="md"
              source={{
                uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
              }}
            />
          }
          rightComponent={
            <Stack>
              <Badge
                colorScheme="danger"
                rounded="full"
                mb={-4}
                mr={-1}
                zIndex={1}
                variant="solid"
                alignSelf="flex-end"
                _text={{
                  fontSize: 10,
                }}
              >
                2
              </Badge>
              <IconButton
                borderRadius="full"
                onPress={() => navigation.navigate("Notification")}
                icon={
                  <Icon color="white" as={FontAwesome5} name="bell" size="md" />
                }
              />
            </Stack>
          }
          title={user.name}
          message="Bem vindo(a),"
        />
      </VStack>

      <VStack flex="3" backgroundColor="gray.100" borderTopRadius={30}>
        <View position="relative">
          <Box alignItems="center">
            <Stack
              backgroundColor="white"
              top={-90}
              borderRadius="lg"
              padding="3"
              position="absolute"
              width="90%"
              height={185}
            >
              <Box display="flex" alignItems="center" flexDirection="row">
                <View flex="4">
                  <Text fontSize="sm" color="black" fontWeight="normal">
                    {course.name}
                  </Text>
                  <Text paddingTop="1" fontWeight="bold" color="black">
                    Matricula: {user.id}
                  </Text>
                </View>
                <View flex="1">
                  <SvgQRCode
                    size={65}
                    value={JSON.stringify({
                      id: user.id,
                      name: user.name,
                      course: course.name,
                    })}
                  />
                </View>
              </Box>
              <Box paddingTop="4" flexDirection="row" alignItems="center">
                <CardIcon text="Não Concluido" percent="50%" nameIcon="lock" />
                <CardIcon text="Concluido" percent="50%" />
              </Box>
              <Box paddingTop="4">
                <Progress size="md" colorScheme="success" value={50} />
              </Box>
            </Stack>
          </Box>
        </View>
        <View>
          <Box paddingTop={120} paddingLeft={6}>
            <Heading fontSize="md">Disciplinas de Hoje</Heading>
          </Box>
        </View>
        <ScrollView>
          {mattersTheDay.map(item => (
            <Box paddingLeft={4} paddingRight={4}>
              <Card marginTop="4" backgroundColor="white">
                <View
                  display="flex"
                  flexDirection="row"
                  justifyContent="space-evenly"
                >
                  <Box flex="3.2">
                    <Text fontWeight="bold" fontSize="md">
                      {item.title}
                    </Text>
                    <Text fontSize="sm">{item.teacher}</Text>
                  </Box>
                  <Box
                    width="10"
                    height="10"
                    backgroundColor="red.500"
                    borderRadius="md"
                  ></Box>
                </View>
              </Card>
            </Box>
          ))}
        </ScrollView>
      </VStack>
    </Stack>
  );
};

export default Home;

import { View, Text, Stack, VStack, IconButton, Icon } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";

import TopBar from "../../components/TopBar";

const ReportCard = () => {
  const navigation = useNavigation();
  return (
    <View flex="1" backgroundColor="green.400">
      <Stack flex="1">
        <VStack>
          <TopBar
            title="Boletim"
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
        <VStack
          backgroundColor="gray.100"
          flex="1"
          borderTopRadius="3xl"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <View
            justifyContent="center"
            width="100%"
            alignItems="center"
            flex="1"
          >
            <Icon as={FontAwesome5} size="3xl" name="book" />
            <Text fontWeight="bold" fontSize="16">
              implementando
            </Text>
          </View>
        </VStack>
      </Stack>
    </View>
  );
};

export default ReportCard;

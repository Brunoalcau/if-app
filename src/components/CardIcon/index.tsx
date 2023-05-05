import React from "react";
import { Box, View, Text, Spacer } from "native-base";

import { Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  text?: string;
  percent?: string;
  nameIcon?: string;
}
const CardIcon: React.FC<Props> = ({ text, percent, nameIcon = "medal" }) => (
  <Spacer space={2} flexDirection="row">
    <Box
      marginRight="3"
      padding={2}
      borderRadius="md"
      backgroundColor="gray.200"
      alignItems="center"
      display="flex"
      justifyContent="center"
    >
      <Icon as={FontAwesome5} name={nameIcon} size="md" />
    </Box>
    <Box>
      <Text fontSize="xs" color="gray.400">
        {text}
      </Text>
      <Text color="black">{percent}</Text>
    </Box>
  </Spacer>
);

export default CardIcon;

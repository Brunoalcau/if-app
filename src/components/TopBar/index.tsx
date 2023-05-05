import React from "react";
import { Platform } from "react-native";
import { View, Box, Stack, HStack, Text, StatusBar } from "native-base";
import Constants from "expo-constants";

interface Props {
  leftComponent?: React.ReactNode;
  isProfile?: boolean;
  rightComponent?: React.ReactNode;
  title: string;
  message?: string;
}

const TopBar: React.FC<Props> = ({
  leftComponent,
  isProfile = false,
  rightComponent,
  title,
  message,
}) => {
  console.log(Platform, Constants.statusBarHeight);
  return (
    <Stack>
      <View
        paddingTop={Platform.OS === "android" ? Constants.statusBarHeight : 10}
        backgroundColor="green.400"
      >
        <StatusBar />
      </View>
      <Stack
        height="16"
        paddingLeft="6"
        paddingRight="6"
        justifyContent="space-between"
        display="flex"
        flexDirection="row"
        alignItems="center"
      >
        <HStack space={6} alignItems="center">
          {leftComponent && <Box>{leftComponent}</Box>}
          <Box flexDirection="column">
            {message && (
              <Text color="white" fontSize="xs" fontWeight="bold">
                {message}
              </Text>
            )}
            <Text
              fontSize="md"
              color="white"
              fontWeight={isProfile ? "bold" : "regular"}
            >
              {title}
            </Text>
          </Box>
        </HStack>
        <Box>{rightComponent}</Box>
      </Stack>
    </Stack>
  );
};

export default TopBar;

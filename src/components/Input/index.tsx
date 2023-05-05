import React from "react";

import { FontAwesome5 } from "@expo/vector-icons";

import {
  Box,
  Input as InputNative,
  Icon,
  FormControl,
  IInputProps,
} from "native-base";

type Props = IInputProps & {
  iconNameRight?: string;
  iconName?: string;
  placeholder: string;
  message?: string | null;
  type?: string;
};

const Input: React.FC<Props> = ({
  iconNameRight,
  iconName,
  isInvalid,
  message = null,
  ...props
}) => {
  const invalid = !!message || isInvalid;
  return (
    <FormControl w="100%" isInvalid={invalid}>
      <InputNative
        fontSize="md"
        isInvalid={invalid}
        height="12"
        _invalid={{
          borderWidth: 1,
          borderColor: "red.200",
        }}
        borderWidth={0}
        InputLeftElement={
          <>
            {iconName && (
              <Icon
                color="blueGray.500"
                size="md"
                marginLeft={3}
                as={FontAwesome5}
                name={iconName}
              />
            )}
          </>
        }
        InputRightElement={
          <>
            {iconNameRight && (
              <Icon
                color="blueGray.500"
                size="md"
                marginRight={3}
                as={FontAwesome5}
                name={iconNameRight}
              />
            )}
          </>
        }
        {...props}
        backgroundColor="white"
      />
      <FormControl.ErrorMessage>{message}</FormControl.ErrorMessage>
    </FormControl>
  );
};

export default Input;

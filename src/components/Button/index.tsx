import React from "react";

import { FontAwesome } from "@expo/vector-icons";

import { Box, Button as ButtonNative, IButtonProps, Icon } from "native-base";

type Props = IButtonProps & {
  iconName: string;
};

const Button: React.FC<Props> = ({ iconName, ...props }) => (
  <Box w="100%">
    <ButtonNative
      _pressed={{
        opacity: "0.8",
      }}
      height="12"
      {...props}
    />
  </Box>
);

export default Button;

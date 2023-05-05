import React from "react";
import { Box, Stack, Text, Heading, VStack, Image } from "native-base";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as yup from "yup";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";

const Logo = require("../../images/logo.png");

type FormProps = {
  email: string;
  password: string;
};

const singInSchema = yup.object({
  email: yup.string().email("Email invalido").required("Informe a email"),
  password: yup.string().required("Informe a senha"),
});

const Login = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: yupResolver(singInSchema),
  });

  const navigate = useNavigation();
  const handleSignIn = (data: FormProps) => {
    navigate.navigate("App");
  };
  // console.log();

  return (
    <Stack flex="1" backgroundColor="green.400">
      <Box flex="1" justifyContent="center" alignItems="center">
        <Heading size="2xl" color="white">
          <Image size="xl" resizeMode={"contain"} source={Logo} />
        </Heading>
        <Box paddingTop="4">
          <Text fontWeight="bold" fontSize="md" color="white">
            Educação, Ciência e tecnologia{" "}
          </Text>
        </Box>
      </Box>
      <Box flex="1" borderTopRadius={30} backgroundColor="gray.100">
        <Stack paddingTop="10">
          <Box paddingLeft={8} paddingRight={8}>
            <Controller
              name="email"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  message={errors.email?.message}
                  placeholder="email"
                  onChangeText={onChange}
                  iconName="envelope"
                />
              )}
            />
          </Box>
          <Box paddingLeft={8} paddingRight={8} paddingTop={5}>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange } }) => (
                <Input
                  message={errors.password?.message}
                  placeholder="Senha"
                  onChangeText={onChange}
                  iconName="lock"
                  type="password"
                />
              )}
            />
          </Box>
        </Stack>
        <VStack paddingLeft={8} paddingRight={8} paddingTop={5}>
          <Button
            onPress={() => navigate.navigate("App")}
            background="green.400"
            borderRadius={10}
          >
            Entrar
          </Button>
        </VStack>
        <VStack paddingLeft={8} paddingRight={8} paddingTop={5}>
          <Button background="orange.400" borderRadius={10}>
            Criar Conta
          </Button>
        </VStack>
      </Box>
    </Stack>
  );
};

export default Login;

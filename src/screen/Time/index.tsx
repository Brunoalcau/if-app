import {
  Stack,
  Text,
  VStack,
  View,
  IconButton,
  Icon,
  Box,
  theme,
  ScrollView,
  Card,
  Modal,
} from "native-base";
import CalendarPicker from "react-native-calendar-picker";
import React, { useMemo } from "react";
import TopBar from "../../components/TopBar";
import Button from "../../components/Button";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { TabView, SceneMap } from "react-native-tab-view";
import { TouchableOpacity, useWindowDimensions, Animated } from "react-native";
import moment from "moment";

var items = [
  {
    title: "Matemática",
    teach: "João Queiroz",
  },
  {
    title: "Língua Portuguesa",
    teach: "Julia Alves",
  },
  {
    title: "História",
    teach: "Juio gadelho",
  },
  {
    title: "Física",
    teach: "Juio gadelho",
  },
];

const ScrollNative = () => (
  <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 20,
    }}
  >
    {/* {console.log()} */}
    {items.map((item, key) => (
      <Card marginTop="4" backgroundColor="white" key={item.title}>
        <View display="flex" flexDirection="row" justifyContent="space-evenly">
          <Box flex="3.2">
            <Text fontWeight="bold" fontSize="md">
              {item.title}
            </Text>
            <Text fontSize="sm">Prof(a): {item.teach}</Text>
          </Box>
          <Box
            flex=".5"
            backgroundColor="gray.400"
            borderRadius="md"
            alignItems="center"
            justifyContent="center"
          >
            <Text fontSize="2xl" color="white">
              {key + 1}º
            </Text>
          </Box>
        </View>
      </Card>
    ))}
  </ScrollView>
);

const mapsCal = [...new Array(moment().daysInMonth())].map((x, i) => i + 1);
const cal = mapsCal.reduce((acc, current) => {
  return {
    ...acc,
    [current]: () => <ScrollNative />,
  };
}, {});

console.log(cal, "Cal");
const renderScene = SceneMap(cal);

const Time = props => {
  const maps = React.useMemo(() =>
    [...new Array(moment().daysInMonth())].map((x, i) => i + 1)
  );

  const calendar = maps.reduce((acc, current) => {
    return {
      ...acc,
      [current]: () => <ScrollNative />,
    };
  }, {});

  const routesMap = maps.reduce((acc: any[], current) => {
    return [
      ...acc,
      {
        key: current,
        title: current,
      },
    ];
  }, []);

  const _renderTabBar = React.useCallback(
    (props: any) => {
      const current = props.navigationState.routes[props.navigationState.index];
      return (
        <View display="flex" flexDirection="row" backgroundColor="green.400">
          <Box padding="4">
            <Text
              fontSize="md"
              fontWeight="bold"
              style={{ color: theme.colors.white }}
            >
              {current?.key}ª
            </Text>
          </Box>
        </View>
      );
    },
    [index]
  );

  const onChangeDate = props => {
    setIndex(moment(props).date());
    setMonth(`${moment(props).month()}/${moment(props).year()}`);
    setOpen(false);
  };
  const layout = useWindowDimensions();
  const navigation = useNavigation();
  const [index, setIndex] = React.useState(moment().date() - 1);
  const [mouth, setMonth] = React.useState(moment().format("MM/YYYY"));
  const [open, setOpen] = React.useState(false);
  const [routes] = React.useState<any[]>(routesMap);
  return (
    <View flex="1" backgroundColor="green.400">
      <VStack>
        <VStack>
          <TopBar
            title="Horário"
            rightComponent={
              <View flexDirection="row" alignItems="center">
                <Text color="white" fontSize="sm">
                  {mouth}
                </Text>
                <IconButton
                  onPress={() => setOpen(true)}
                  borderRadius="full"
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  icon={
                    <Icon
                      color="white"
                      as={FontAwesome5}
                      name="calendar-day"
                      size="sm"
                    />
                  }
                />
              </View>
            }
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
        <Stack flex="1"></Stack>
      </VStack>
      <VStack flex="2" backgroundColor="gray.100" borderTopRadius="3xl">
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          renderTabBar={_renderTabBar}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
        />
      </VStack>
      <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
        <Modal.Content
          width="100%"
          marginBottom={10}
          marginTop="auto"
          backgroundColor="white"
        >
          <Modal.CloseButton />
          <Modal.Header>Calendario</Modal.Header>
          <Modal.Body>
            <View>
              <CalendarPicker
                weekdays={["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"]}
                previousTitle="Anterior"
                nextTitle="Próximo"
                onDateChange={onChangeDate}
                todayBackgroundColor={theme.colors.gray[400]}
                selectedDayColor={theme.colors.green[400]}
                selectedDayTextColor={theme.colors.white}
                textStyle={{
                  fontFamily: theme.fonts.mono,
                }}
                months={[
                  "Janeiro",
                  "Fevereiro",
                  "Março",
                  "Abril",
                  "Maio",
                  "Junho",
                  "Julho",
                  "Agosto",
                  "Setembro",
                  "Outubro",
                  "Novembro",
                  "Dezembro",
                ]}
              />
            </View>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </View>
  );
};

export default Time;

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Search } from "../screens/Search";
import { Marketplace } from "../screens/Marketplace";
import { Feather } from "@expo/vector-icons";
import theme from "../theme";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: () => {
              return <Feather name="home" size={25} color="#000" />;
            },
            tabBarActiveTintColor: theme.COLORS.TANGERINE,
          }}
        />
        <Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: () => {
              return <Feather name="search" size={25} color="#000" />;
            },
            tabBarActiveTintColor: theme.COLORS.TANGERINE,
          }}
        />
        <Screen
          name="Marketplace"
          component={Marketplace}
          options={{
            tabBarIcon: () => {
              return <Feather name="shopping-cart" size={25} color="#000" />;
            },
            tabBarActiveTintColor: theme.COLORS.TANGERINE,
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return <Feather name="user" size={25} color="#000" />;
            },
            tabBarActiveTintColor: theme.COLORS.TANGERINE,
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

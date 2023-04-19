import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile";
import { Search } from "../screens/Walking";
import { Marketplace } from "../screens/Marketplace";
import { Feather } from "@expo/vector-icons";

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
          }}
        />
        <Screen
          name="Walking"
          component={Search}
          options={{
            tabBarIcon: () => {
              return <Feather name="map" size={25} color="#000" />;
            },
          }}
        />
        <Screen
          name="Marketplace"
          component={Marketplace}
          options={{
            tabBarIcon: () => {
              return <Feather name="shopping-cart" size={25} color="#000" />;
            },
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => {
              return <Feather name="user" size={25} color="#000" />;
            },
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesome } from '@expo/vector-icons'
import { Colors } from "../utils/colors";
import ProfileScreen from "../screens/ProfileScreen";
import ChatScreen from '../screens/ChatScreen'

const Tab = createBottomTabNavigator()

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: Colors.secondary
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <FontAwesome
                            name="home"
                            size={30}
                            color={color}
                        />
                }}
            />
            <Tab.Screen
                name="Chats"
                component={ChatScreen}
                options={{
                    tabBarIcon: ({ color }) =>
                        <FontAwesome
                            name="comments"
                            size={30}
                            color={color}
                        />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    // tabBarBadge: 3,
                    tabBarBadgeStyle: { color: 'white', backgroundColor: 'red' },
                    tabBarIcon: ({ color }) =>
                        <FontAwesome
                            name="user"
                            size={28}
                            color={color}
                        />
                }}
            />
        </Tab.Navigator>
    )
}

export default BottomTabs
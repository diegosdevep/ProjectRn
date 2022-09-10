import { createStackNavigator } from '@react-navigation/stack';
import SignIn from '../components/Auth/SignIn';
import Welcome from '../components/Auth/Welcome';
import Register from '../components/Auth/Register'
import AuthScreen from '../screens/AuthScreen';


const Auth = createStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator
            screenOptions={{
                headerShown: false,
                animationTypeForReplace: 'pop',
            }}
        >
            <Auth.Screen name="Auth" component={AuthScreen} />
        </Auth.Navigator>
    );
}
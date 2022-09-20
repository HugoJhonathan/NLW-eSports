import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Game } from '../screens/Game'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes() {

    return (
        <Navigator initialRouteName='home' screenOptions={{ headerShown: false, animation: 'simple_push' }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="game"
                component={Game}
            />
        </Navigator>
    )
}
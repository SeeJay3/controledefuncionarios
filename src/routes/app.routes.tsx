import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';

import { Incluir } from "../pages/Incluir";
import { Listagem } from "../pages/Listagem";
import { Pesquisa } from "../pages/Pesquisa";
import { Totais } from "../pages/Totais";

type AppRoutes = {
    incluir: undefined;
    listagem: undefined;
    pesquisa: undefined;
    totais: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes () {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'black',
            tabBarShowLabel: true,
            // tabBarLabelPosition: 'beside-icon',
            tabBarInactiveBackgroundColor: 'white',
            tabBarStyle: {
                backgroundColor: 'lightgrey',
                height: 50,
            }
            }}>
            <Screen 
            name="incluir" 
            component={Incluir}
            options={{
                tabBarLabel: 'Incluir',
                tabBarIcon: ({ size, color }) => 
                    <FontAwesome6 
                     name="add" 
                     size={26}/>
                }}
                />
            <Screen 
            name="listagem" 
            component={Listagem}
            options={{
                tabBarLabel: 'Listagem',
                tabBarIcon: ({ size, color }) => 
                    <FontAwesome 
                     name="list-ul" 
                     size={26} 
                    /> 
            }}
            />
            <Screen 
            name="pesquisa" 
            component={Pesquisa}
            options={{
                tabBarLabel: 'Pesquisar',
                tabBarIcon: ({ size, color }) => 
                    <FontAwesome 
                     name="search" 
                     size={26} 
                    /> 
            }}
            />
            <Screen 
            name="totais" 
            component={Totais}
            options={{
                tabBarLabel: 'Totais',
                tabBarIcon: ({ size, color }) => 
                    <Foundation 
                     name="results"  
                     size={26} 
                    /> 
        
            }}
            />
        </Navigator>
    )
}

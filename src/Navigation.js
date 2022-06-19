import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
import { Button } from "react-native-paper";
import CustomNavigationDrawer from "./componenets/CustomNavigationDrawer";
import CustomNavigationBar from './componenets/CustomNavigationBar'
import { useNavigation } from "@react-navigation/native";
import { large, useBreakpoint} from './breakpoints'

const HelloStack = createNativeStackNavigator(); 
const Hello = () => (
    <HelloStack.Navigator
        screenOptions={{ 
            header:props => <CustomNavigationBar {...props} />
         }}
    >
        <HelloStack.Screen 
            name="HelloScreen1"
            component={HelloScreen1}
            options={ {title: 'Hello screen1 !!!'} } 
        />
        
        <HelloStack.Screen 
            name="HelloScreen2"
            component={HelloScreen2}
            options={ {title: 'Hello screen2-3!!!!'} } 
        />

    </HelloStack.Navigator>
); 

function HelloScreen1() {
    const navigation = useNavigation(); 

    return (
        <>
        <Text>Hola, screen 1 </Text>
        <Button
             mode ="contained" 
             onPress={() => navigation.navigate('HelloScreen2') } 
        > 
            Go to screen2</Button>
        </>
    )
}


function HelloScreen2() {
    return (
        <>
        <Text>Hello screen 2</Text>        
        </>
    )
}


const AnotherStack = createNativeStackNavigator(); 
const Another = () => (
    <AnotherStack.Navigator
        screenOptions={{ 
            header:props => <CustomNavigationBar {...props} />
         }}
    >
        <AnotherStack.Screen 
            name="AnotherScreen1"
            component={AnotherScreen1}
            options={ {title: 'Another1-error?'} } 
        />
    </AnotherStack.Navigator>
); 


function AnotherScreen1() {
    return <Text> hi Another1 !!</Text>; 
}

const Drawer = createDrawerNavigator();

const getDrawerTypeForBreakpoint = breakpoint =>
    breakpoint === large ? 'permanent' : 'back'; 


function NavigationContents() {
    const breakpoint = useBreakpoint(); 
    const drawerTypeForBreakpoint = getDrawerTypeForBreakpoint(breakpoint); 

    return (
        <Drawer.Navigator 
          screenOptions={{ 
            headerShown:false,
            drawerType: drawerTypeForBreakpoint,
        }}
          drawerContent={props => <CustomNavigationDrawer {...props} /> }
        >
         <Drawer.Screen name="Hello" component = {Hello} />           
         <Drawer.Screen name="Another" component = {Another} />           
        </Drawer.Navigator>
    );
}

export default function Navigation() {

return (
    <NavigationContainer>
        <NavigationContents /> 
    </NavigationContainer>
)

} 

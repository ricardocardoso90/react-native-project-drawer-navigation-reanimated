import { Drawer } from 'expo-router/drawer';
import { Feather } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function Layout() {
  return (
    <GestureHandlerRootView>
      <Drawer
        screenOptions={{
          headerShown: false,
          overlayColor: 'transparent',
          drawerActiveTintColor: '#FFF',
          drawerInactiveTintColor: '#727D9B',
          drawerActiveBackgroundColor: 'transparent',
          drawerInactiveBackgroundColor: 'transparent',

          drawerLabelStyle: { marginLeft: -24 },
          sceneContainerStyle: { backgroundColor: '#1D1F25' },
          drawerStyle: { width: '50%', backgroundColor: '#1D1F25' },
        }}
      >
        <Drawer.Screen
          name='index'
          options={{
            drawerLabel: 'Início',
            drawerIcon: ({ color }) => <Feather name='home' size={20} color={color} />
          }}
        />

        <Drawer.Screen
          name='perfil'
          options={{
            drawerLabel: 'Perfil',
            drawerIcon: ({ color }) => <Feather name='user' size={20} color={color} />
          }}
        />

        <Drawer.Screen
          name='notification'
          options={{
            drawerLabel: 'Notificações',
            drawerIcon: ({ color }) => <Feather name='bell' size={20} color={color} />
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
};
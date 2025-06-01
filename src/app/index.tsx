import { Image, StyleSheet, Text, View } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { DrawerSceneWrapper } from "../components/drawer-scene-wrapper";

export default function Home() {
  return (
    <DrawerSceneWrapper>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.img}
            source={{ uri: "https://github.com/ricardocardoso90.png" }}
          />
          <View style={styles.user}>
            <Text style={styles.hello}>Olá,</Text>
            <Text style={styles.username}>Ricardo Cardoso</Text>
          </View>

          <DrawerToggleButton />
        </View>
      </View>
    </DrawerSceneWrapper>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingTop: 65,
    backgroundColor: '#FFF'
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  user: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 14,
  },
  username: {
    fontSize: 16,
    fontWeight: '700'
  }
});
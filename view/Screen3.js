import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native"; 

export default function Screen3({ route }) {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      

        <Pressable
          onPress={() => navigation.goBack()}
          style={{ paddingRight: 20 }}
        >
          <Image
            source={require("../assets/arrowback.png")}
            style={{ width: 22, height: 22 }}
          />
        </Pressable>
   

      <View
        style={{
          width: 358,
          height: 388,
          backgroundColor: "rgba(233, 65, 65, 0.1)",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
        }}
      >
        <Image
          source={route.params?.img}
          resizeMode="contain"
          style={{ width: 297, height: 340 }}
        />
      </View>

      <View style={{ width: "100%", height: 300, justifyContent: "space-around" }}>
        <Text style={{ fontSize: 35, fontWeight: "400", fontFamily: "Voltaire" }}>
          {route.params?.name}
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "400",
              fontFamily: "Voltaire",
              color: "rgba(0, 0, 0, 0.59)",
              width: "50%",
            }}
          >
            {route.params?.discount}
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "400",
              fontFamily: "Voltaire",
              width: "50%",
            }}
          >
            {route.params?.price} $
          </Text>
        </View>
        <Text style={{ fontSize: 25, fontWeight: "400", fontFamily: "Voltaire" }}>
          Description
        </Text>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "400",
            fontFamily: "Voltaire",
            color: "rgba(0, 0, 0, 0.57)",
          }}
        >
          {route.params?.Description}
        </Text>
      </View>

      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Image
          source={require("../assets/akar-icons_heart.png")}
          style={{ width: 35, height: 35 }}
        />
        <Pressable
          style={{
            width: 269,
            height: 54,
            backgroundColor: "red",
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              fontWeight: "400",
              fontFamily: "Voltaire",
            }}
          >
            Thêm vào giỏ hàng
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    padding: 10,
    backgroundColor: "#ccc",
    borderRadius: 5,
  },
  backText: {
    fontSize: 18,
    color: "#333",
  },
});

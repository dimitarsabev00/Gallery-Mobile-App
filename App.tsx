import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

import { photos } from "./helpers/photos";
import { Carousel } from "./components";

export default function App() {
  const { height, width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: height / 2 }}>
        <FlatList
          data={photos}
          numColumns={4}
          contentContainerStyle={{ gap: 2 }}
          columnWrapperStyle={{ gap: 2 }}
          scrollEnabled={false}
          inverted
          renderItem={({ item }) => (
            <Image
              source={item.image}
              style={{ width: `${100 / 4}%`, aspectRatio: 1 }}
            />
          )}
        />
      </View>

      <Carousel title="Albums" photos={photos.slice(0, 6)} />
      <Carousel title="People" photos={photos.slice(3, 6)} />
      <Carousel title="Featured" photos={photos.slice(6, 10)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

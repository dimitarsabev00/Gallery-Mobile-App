import { FlatList, Image, SafeAreaView, StyleSheet } from "react-native";

import { photos } from "./helpers/photos";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={photos}
        numColumns={4}
        contentContainerStyle={{ gap: 2 }}
        columnWrapperStyle={{ gap: 2 }}
        renderItem={({ item }) => (
          <Image
            source={item.image}
            style={{ width: `${100 / 4}%`, aspectRatio: 1 }}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});

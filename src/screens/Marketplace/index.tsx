import React from "react";
import { ScrollView, View } from "react-native";
import { WalkingClassCard } from "./WalkingClassCard";
import { styles } from "./styles";
import db from "./db";

export function Marketplace() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        {db.map((classData, index) => (
          <WalkingClassCard
            key={index}
            {...classData}
            onPress={() => console.log(`Aula selecionada: ${index}`)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

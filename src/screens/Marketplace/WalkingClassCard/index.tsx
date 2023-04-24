import { View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import React from "react";

interface WalkingClassCardProps {
  imageUrl: string;
  name: string;
  language: string;
  rating: number;
  price: number;
  walkings: number;
  city: string;
  onPress: () => void;
}

export function WalkingClassCard({
  imageUrl,
  name,
  language,
  rating,
  price,
  walkings,
  city,
  onPress,
}: WalkingClassCardProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {imageUrl === "" ? (
        <Feather name="user" size={128} color="#000" />
      ) : (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.language}>{language}</Text>
        <Text style={styles.rating}>{`⭐ ${rating}`}</Text>
        <Text style={styles.walkings}>{`🚶‍♂️ ${walkings} walkings`}</Text>
        <Text style={styles.city}>{city}</Text>
        <Text style={styles.price}>R$ {price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
}

import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import MapView, { AnimatedRegion, LatLng, Marker } from "react-native-maps";

interface Props {
  onLongPress: any;
  points: any[];
  pointsFilter: boolean;
}
interface Point {
  coordinate: LatLng | AnimatedRegion;
  name: string;
}

const Map = ({ onLongPress, pointsFilter, points }: Props) => {
  return (
    <MapView style={styles.map} onLongPress={onLongPress}>
      {pointsFilter &&
        points.map(({ coordinate, name }: Point, index: number) => (
          <Marker key={index} coordinate={coordinate} title={name} />
        ))}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width,
  },
});
export default Map;

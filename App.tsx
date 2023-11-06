import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import MapLibreGL from '@maplibre/maplibre-react-native';

const AWS_REGION = 'YOUR_AWS_REGION';
const AWS_NAME = 'YOUR_MAP_NAME';
const AWS_API_KEY = 'YOUR_API_KEY';

MapLibreGL.setAccessToken(null);

function getMapStyle(region: string, name: string, apiKey: string) {
  return `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${name}/style-descriptor?key=${apiKey}`;
}

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <MapLibreGL.MapView
        style={styles.container}
        styleURL={getMapStyle(AWS_REGION, AWS_NAME, AWS_API_KEY)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

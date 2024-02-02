import {View, Text, StyleSheet, Modal} from 'react-native';
import React from 'react';
import {
  LatLng,
  LeafletView,
  WebviewLeafletMessage,
  MapMarker,
} from 'react-native-leaflet-view';
import {LocationType} from 'src/type';
import {moderateScale} from 'react-native-size-matters';
import Button from '@components/common/Button';

type PropsType = {
  show: boolean;
  onRequestClose: () => void;
  location?: LocationType;
  onLocationSelect: (location: LocationType) => void;
  onConfirm: () => void;
};
const DEFAULT_COORDINATE: LatLng = {
  lat: 35.7219,
  lng: 51.3347,
};

export default function Map({
  show,
  onRequestClose,
  location,
  onLocationSelect,
  onConfirm,
}: PropsType) {
  const onMapPressed = (msg: WebviewLeafletMessage) => {
    if (msg.event === 'onMapClicked') {
      onLocationSelect([
        msg.payload?.touchLatLng?.lat,
        msg.payload?.touchLatLng?.lng,
      ]);
    }
  };
  const marker = !!location
    ? [
        {
          position: {lat: location[0], lng: location[1]},
          icon: '📍',
          size: [48, 48],
        },
      ]
    : undefined;
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={show}
      onRequestClose={onRequestClose}>
      <View style={styles.container}>
        <View style={styles.map}>
          <LeafletView
            mapMarkers={marker}
            onMessageReceived={onMapPressed}
            mapCenterPosition={DEFAULT_COORDINATE}
          />
        </View>
        <View style={styles.btn}>
          <Button disabled={!location} onPress={onConfirm}>
            {!!location ? 'Confirm' : 'Choose destination'}
          </Button>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '85%',
    overflow: 'hidden',
  },
  btn: {
    width: '70%',
    marginTop: moderateScale(16),
    height: moderateScale(50),
  },
});

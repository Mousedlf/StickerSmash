import { StatusBar } from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';

const placeholderImage = require('./assets/sticker-smash-assets/assets/images/background-image.png')
import ImageViewer from "./components/ImageViewer";
import Button from "./components/Button";
import * as ImagePicker from "expo-image-picker";
import {useState} from "react";

export default function App() {

    const [selectedImage, setSelectedImage] = useState(null);
    const pickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri)
        } else {
            alert('You did not select any image.');
        }
    };

    return (
    <View style={styles.container}>
      <ImageViewer
          placeholderImageSource={placeholderImage}
          selectedImage={selectedImage}
      />
      <Button label="Bouton 1" theme='primary' onPress={pickImageAsync}/>
      <Button label='Bouton 2'/>
      <Text>coucou</Text>
      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

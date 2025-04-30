import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState, useEffect } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';

export const CameraComponent = () => {
  const cameraRef = useRef(null);
  const [facing, setFacing] = useState('back');
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [permission, requestPermission] = useCameraPermissions();
  const [mediaPermission, requestMediaPermission] = MediaLibrary.usePermissions();
  const [location, setLocation] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [mode, setMode] = useState('photo'); // 'photo' or 'video'

  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
      }
    };
    getLocation();
  }, []);

  if (!permission || !mediaPermission) return <View />;
  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesita permiso para usar la cámara</Text>
        <Button onPress={requestPermission} title="Permitir cámara" />
      </View>
    );
  }

  if (!mediaPermission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Necesita permiso para guardar en galería</Text>
        <Button onPress={requestMediaPermission} title="Permitir galería" />
      </View>
    );
  }

  const toggleCameraFacing = () => {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  };

  const toggleMode = () => {
    setMode(current => (current === 'photo' ? 'video' : 'photo'));
  };

  const handleOpenCamera = () => setIsCameraVisible(true);
  const handleCloseCamera = () => setIsCameraVisible(false);

  const saveMediaEntry = async (uri, type) => {
    const asset = await MediaLibrary.createAssetAsync(uri);
    const entry = {
      uri: asset.uri,
      description,
      date: new Date().toISOString(),
      location: location ? {
        latitude: location.latitude,
        longitude: location.longitude,
      } : null,
      type,
    };

    const filePath = FileSystem.documentDirectory + 'photoData.json';
    try {
      const existing = await FileSystem.readAsStringAsync(filePath);
      const data = JSON.parse(existing);
      data.push(entry);
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify(data));
    } catch (error) {
      await FileSystem.writeAsStringAsync(filePath, JSON.stringify([entry]));
    }

    setDescription('');
    Alert.alert('Guardado', `${type === 'photo' ? 'Foto' : 'Video'} guardado correctamente.`);
  };

  const takePhoto = async () => {
    if (!description.trim()) {
      Alert.alert('Descripción requerida', 'Ingresa una descripción antes de continuar.');
      return;
    }

    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      await saveMediaEntry(photo.uri, 'photo');
    }
  };

  const recordVideo = async () => {
    if (!description.trim()) {
      Alert.alert('Descripción requerida', 'Ingresa una descripción antes de grabar.');
      return;
    }

    if (cameraRef.current) {
      setIsRecording(true);
      const video = await cameraRef.current.recordAsync();
      await saveMediaEntry(video.uri, 'video');
      setIsRecording(false);
    }
  };

  const stopRecording = async () => {
    if (cameraRef.current && isRecording) {
      cameraRef.current.stopRecording();
    }
  };

  return (
    <View style={styles.container}>
      {/* Título de la aplicación */}
      <Text style={styles.appName}>MemoriesApp</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Agrega una descripción..."
        value={description}
        onChangeText={setDescription}
      />
      {isCameraVisible ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
              <Text style={styles.text}>🔄</Text>
            </TouchableOpacity>

            {mode === 'photo' ? (
              <TouchableOpacity style={styles.button} onPress={takePhoto}>
                <Text style={styles.text}>📸</Text>
              </TouchableOpacity>
            ) : isRecording ? (
              <TouchableOpacity style={styles.button} onPress={stopRecording}>
                <Text style={styles.text}>⏹️</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.button} onPress={recordVideo}>
                <Text style={styles.text}>🎥</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity style={styles.button} onPress={toggleMode}>
              <Text style={styles.text}>{mode === 'photo' ? 'Cambiar a Video' : 'Cambiar a Foto'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={handleCloseCamera}>
              <Text style={styles.text}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <TouchableOpacity style={styles.openCameraButton} onPress={handleOpenCamera}>
          <Text style={styles.openCameraText}>Abrir Cámara</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  
    alignItems: 'center',      
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f9f9f9',
  },
  appName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#6c63ff',
    marginBottom: 20, 
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
    color: '#555',
  },
  camera: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    height: '80%',
  },
  input: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
  openCameraButton: {
    backgroundColor: '#6c63ff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    alignItems: 'center',
  },
  openCameraText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

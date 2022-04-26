import { View, Text, Image, StyleSheet } from 'react-native';
import { gStyles } from '../styles/gStyles';

export default function ArticleInfo({ route }) {
  return (
    <View style={gStyles.main}>
      <Image
        source={{
          width: '100%',
          height: 300,
          uri: route.params.img,
        }}
      />
      <Text style={gStyles.title}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.fullText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: '#f55151',
  },
});
